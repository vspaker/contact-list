import React, { Component } from 'react';
import SortIndicator from '../sort-indicator';
import './table-heading.css';

class TableHeading extends Component {
  state = {
    sortById: `default`,
    sortByFirstName: `default`,
    sortByLastName: `default`,
    sortByEmail: `default`,
    sortByPhone: `default`,
  };

  render() {
    const {
      onIdSort,
      onFirstNameSort,
      onLastNameSort,
      onEmailSort,
      onPhoneSort,
    } = this.props.sortFunctions;

    const onIdClick = () => {
      this.setState((state) => {
        const { sortById } = state;
        const sortOrder = sortById === `default` ? true : !sortById;
        return {
          sortById: sortOrder,
          sortByFirstName: `default`,
          sortByLastName: `default`,
          sortByEmail: `default`,
          sortByPhone: `default`,
        };
      });

      onIdSort(this.state.sortById);
    };
    const onFirstNameClick = () => {
      this.setState((state) => {
        const { sortByFirstName } = state;
        const sortOrder =
          sortByFirstName === `default` ? true : !sortByFirstName;
        return {
          sortById: `default`,
          sortByFirstName: sortOrder,
          sortByLastName: `default`,
          sortByEmail: `default`,
          sortByPhone: `default`,
        };
      });
      onFirstNameSort(this.state.sortByFirstName);
    };
    const onLastNameClick = () => {
      this.setState((state) => {
        const { sortByLastName } = state;
        const sortOrder = sortByLastName === `default` ? true : !sortByLastName;
        return {
          sortById: `default`,
          sortByFirstName: `default`,
          sortByLastName: sortOrder,
          sortByEmail: `default`,
          sortByPhone: `default`,
        };
      });
      onLastNameSort(this.state.sortByLastName);
    };
    const onEmailClick = () => {
      this.setState((state) => {
        const { sortByEmail } = state;
        const sortOrder = sortByEmail === `default` ? true : !sortByEmail;
        return {
          sortById: `default`,
          sortByFirstName: `default`,
          sortByLastName: `default`,
          sortByEmail: sortOrder,
          sortByPhone: `default`,
        };
      });
      onEmailSort(this.state.sortByEmail);
    };
    const onPhoneClick = () => {
      this.setState((state) => {
        const { sortByPhone } = state;
        const sortOrder = sortByPhone === `default` ? true : !sortByPhone;
        return {
          sortById: `default`,
          sortByFirstName: `default`,
          sortByLastName: `default`,
          sortByEmail: `default`,
          sortByPhone: sortOrder,
        };
      });
      onPhoneSort(this.state.sortByPhone);
    };

    return (
      <div className='table-heading'>
        <span onClick={onIdClick}>
          ID <SortIndicator state={this.state.sortById} />
        </span>
        <span onClick={onFirstNameClick}>
          First Name <SortIndicator state={this.state.sortByFirstName} />
        </span>
        <span onClick={onLastNameClick}>
          Last Name <SortIndicator state={this.state.sortByLastName} />
        </span>
        <span onClick={onEmailClick}>
          E-mail <SortIndicator state={this.state.sortByEmail} />
        </span>
        <span onClick={onPhoneClick}>
          Phone <SortIndicator state={this.state.sortByPhone} />
        </span>
      </div>
    );
  }
}

export default TableHeading;
