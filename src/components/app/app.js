import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import { sortData } from '../utils';
import Pagination from '../pagination';

import Header from '../header';
import ItemList from '../item-list';
import ErrorBoundry from '../error-boundry';
import LoadIndicator from '../load-indicator';
import ItemAdd from '../item-add';
import FilterTextarea from '../filter-textarea';
import AddButton from '../add-button';

import { MAX_ITEMS_PER_PAGE, PAGE_NEIGHBOURS } from '../consts';

class App extends Component {
  state = {
    items: [],
    backUpItems: [],
    isLoading: false,
    currentItems: [],
    currentPage: null,
    totalPages: null,
    searchMode: false,
    addNewItemMode: false,
  };

  apiService = new ApiService();

  setSmallData = (e) => {
    e.stopPropagation();
    this.setState({ isLoading: true });
    this.apiService.getSmallData().then((items) => {
      this.setState({ isLoading: false });
      this.setState({ items, backUpItems: items, addNewItemMode: true });
    });
  };

  setFullData = (e) => {
    e.stopPropagation();
    this.setState({ isLoading: true });
    this.apiService.getFullData().then((items) => {
      this.setState({ isLoading: false });
      this.setState({ items, backUpItems: items, addNewItemMode: true });
    });
  };

  setSortedData = (state, criteria) => {
    const { items } = this.state;
    const sortedData = sortData(items, criteria, state);

    if (this.state.currentItems.length !== 0) {
      this.setState({ currentItems: sortedData });
    }
    this.setState({ items: sortedData });
    this.updateItems(sortedData);
  };

  updateItems = (newItems = []) => {
    const { items } = this.state;
    if (items.length > MAX_ITEMS_PER_PAGE) {
      const { currentPage, totalPages } = this.state;
      const pageLimit = MAX_ITEMS_PER_PAGE;
      const totalRecords = items.length;
      const data = { currentPage, totalPages, pageLimit, totalRecords };
      this.onPageChanged(data, newItems);
    }
  };

  onPageChanged = (data, newItems = this.state.items) => {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentItems = newItems.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentItems, totalPages });
  };

  onSearch = (text) => {
    const { backUpItems } = this.state;
    const filteredData = backUpItems.filter((item) => {
      return (
        String(item['id']).toLowerCase().includes(text.toLowerCase()) ||
        item['firstName'].toLowerCase().includes(text.toLowerCase()) ||
        item['lastName'].toLowerCase().includes(text.toLowerCase()) ||
        item['email'].toLowerCase().includes(text.toLowerCase()) ||
        String(item['phone']).toLowerCase().includes(text.toLowerCase())
      );
    });
    this.setState({ items: filteredData, searchMode: true });
    this.updateItems(filteredData);
  };

  onAddNewPersonButtonClick = (e) => {
    e.preventDefault();
    this.setState({ addNewItemMode: false });
  };

  onAddNewPersonFormSubmit = (item) => {
    const items = this.state.items;
    items.unshift(item);
    this.setState({ addNewItemMode: true, items });
  };

  render() {
    const { items, currentItems, searchMode } = this.state;
    const itemsToRender = currentItems.length !== 0 ? currentItems : items;
    const itemList = this.state.isLoading ? (
      <LoadIndicator />
    ) : (
      <ItemList
        data={itemsToRender}
        sortData={this.setSortedData}
        searchMode={searchMode}
      />
    );

    const totalItems = items.length;

    const pagination =
      totalItems <= MAX_ITEMS_PER_PAGE ? null : (
        <Pagination
          totalRecords={totalItems}
          pageLimit={MAX_ITEMS_PER_PAGE}
          pageNeighbours={PAGE_NEIGHBOURS}
          onPageChanged={this.onPageChanged}
        />
      );

    const isAppStarted = this.state.items.length > 0;
    const addNewItemMode = this.state.addNewItemMode;

    const addTable =
      isAppStarted && !addNewItemMode ? (
        <ItemAdd onNewPersonAdd={this.onAddNewPersonFormSubmit} />
      ) : null;
    const addButton =
      isAppStarted && addNewItemMode ? (
        <AddButton onNewPersonButtonClick={this.onAddNewPersonButtonClick} />
      ) : null;

    const filter = isAppStarted ? (
      <FilterTextarea onSearch={this.onSearch} />
    ) : null;
    const firstScreen = isAppStarted ? null : (
      <Header onSmallClick={this.setSmallData} onFullClick={this.setFullData} />
    );

    return (
      <ErrorBoundry>
        <div className='App'>
          {firstScreen}
          {addTable}
          {addButton}
          {filter}
          {itemList}
          {pagination}
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
