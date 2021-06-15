import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import { sortData } from '../utils';
import Pagination from '../pagination';

import Header from '../header';
import ItemList from '../item-list';
import ErrorBoundry from '../error-boundry';
import LoadIndicator from '../load-indicator';

import { MAX_ITEMS_PER_PAGE } from '../consts';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    currentItems: [],
    currentPage: null,
    totalPages: null,
  };

  apiService = new ApiService();

  setSmallData = () => {
    this.setState({ isLoading: true });
    this.apiService.getSmallData().then((items) => {
      this.setState({ isLoading: false });
      this.setState({ items });
    });
  };

  setFullData = () => {
    this.setState({ isLoading: true });
    this.apiService.getFullData().then((items) => {
      this.setState({ isLoading: false });
      this.setState({ items });
    });
  };

  setSortedData = (state, criteria) => {
    const itemsToSort =
      this.state.currentItems.length !== 0
        ? this.state.currentItems
        : this.state.items;
    const sortedData = sortData(itemsToSort, criteria, state);
    if (this.state.currentItems.length !== 0) {
      this.setState({ currentItems: sortedData });
    }
    this.setState({ items: sortedData });
  };

  onPageChanged = (data) => {
    const { items } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentItems = items.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentItems, totalPages });
  };

  render() {
    const { items, currentItems } = this.state;
    const itemsToRender = currentItems.length !== 0 ? currentItems : items;
    const itemList = this.state.isLoading ? (
      <LoadIndicator />
    ) : (
      <ItemList data={itemsToRender} sortData={this.setSortedData} />
    );

    const totalItems = items.length;

    const pagination =
      totalItems <= MAX_ITEMS_PER_PAGE ? null : (
        <Pagination
          totalRecords={totalItems}
          pageLimit={MAX_ITEMS_PER_PAGE}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      );

    return (
      <ErrorBoundry>
        <div className='App'>
          <Header
            onSmallClick={this.setSmallData}
            onFullClick={this.setFullData}
          />
          {itemList}
          {pagination}
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
