import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';

class Header extends Component {
  render() {
    return (
      <ErrorBoundry>
        <header>
          <button onClick={this.props.onSmallClick}>Small</button>
          <button onClick={this.props.onFullClick}>Full</button>
        </header>
      </ErrorBoundry>
    );
  }
}

export default Header;
