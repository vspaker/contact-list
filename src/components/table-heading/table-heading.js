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
    const { sortData } = this.props;

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

      sortData(this.state.sortById, `id`);
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
      sortData(this.state.sortByFirstName, `firstName`);
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
      sortData(this.state.sortByLastName, `lastName`);
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
      sortData(this.state.sortByEmail, `email`);
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
      sortData(this.state.sortByPhone, `phone`);
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
