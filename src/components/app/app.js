import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import Header from '../header';
import ItemList from '../item-list';
import ErrorBoundry from '../error-boundry';
import LoadIndicator from '../load-indicator';

class App extends Component {
  state = {
    items: null,
    isLoading: false,
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

  onIdSort = () => {
    console.log(`onIdSort`);
  };
  onFirstNameSort = () => {
    console.log(`onFirstNameSort`);
  };

  onLastNameSort = () => {
    console.log(`onLastNameSort`);
  };

  onEmailSort = () => {
    console.log(`onEmailSort`);
  };

  onPhoneSort = () => {
    console.log(`onPhoneSort`);
  };

  render() {
    const items = this.state.isLoading ? (
      <LoadIndicator />
    ) : (
      <ItemList
        data={this.state.items}
        onIdSort={this.onIdSort}
        onFirstNameSort={this.onFirstNameSort}
        onLastNameSort={this.onLastNameSort}
        onEmailSort={this.onEmailSort}
        onPhoneSort={this.onPhoneSort}
      />
    );
    return (
      <ErrorBoundry>
        <div className='App'>
          <Header
            onSmallClick={this.setSmallData}
            onFullClick={this.setFullData}
          />
          {items}
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
