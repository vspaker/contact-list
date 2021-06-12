import React, { Component } from 'react';
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
      onIdSort();
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
    };
    const onFirstNameClick = () => {
      onFirstNameSort();
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
    };
    const onLastNameClick = () => {
      onLastNameSort();
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
    };
    const onEmailClick = () => {
      onEmailSort();
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
    };
    const onPhoneClick = () => {
      onPhoneSort();
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
    };

    const getSortIndicator = (state) => {
      if (state === `default`) {
        return null;
      }
      const indicator = state ? <span>Up</span> : <span>Down</span>;
      return indicator;
    };

    const idSortIndicator = getSortIndicator(this.state.sortById);
    const firstNameSortIndicator = getSortIndicator(this.state.sortByFirstName);
    const lastNameSortIndicator = getSortIndicator(this.state.sortByLastName);
    const emailSortIndicator = getSortIndicator(this.state.sortByEmail);
    const phoneSortIndicator = getSortIndicator(this.state.sortByPhone);

    console.log(this.state);
    return (
      <div className='table-heading'>
        <span onClick={onIdClick}>ID {idSortIndicator}</span>
        <span onClick={onFirstNameClick}>
          First Name {firstNameSortIndicator}
        </span>
        <span onClick={onLastNameClick}>Last Name {lastNameSortIndicator}</span>
        <span onClick={onEmailClick}>E-mail {emailSortIndicator}</span>
        <span onClick={onPhoneClick}>Phone {phoneSortIndicator}</span>
      </div>
    );
  }
}

export default TableHeading;
