import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import './header.css';

class Header extends Component {
  render() {
    const { onSmallClick, onFullClick } = this.props;
    return (
      <ErrorBoundry>
        <header className='start-box'>
          <p>Select data:</p>
          <button onClick={onSmallClick}>Small</button>
          <button onClick={onFullClick}>Full</button>
        </header>
      </ErrorBoundry>
    );
  }
}

export default Header;
