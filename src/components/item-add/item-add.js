import React, { Component } from 'react';
import './item-add.css';

class ItemAdd extends Component {
  state = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  _adaptToList = (item) => {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
      address: {
        streetAddress: `N/A`,
        city: `N/A`,
        state: `N/A`,
        zip: `N/A`,
      },
      description: `N/A`,
      key: Date.now(),
    };
  };

  onFormSubmit = (e) => {
    const { onNewPersonAdd } = this.props;
    e.preventDefault();
    onNewPersonAdd(this._adaptToList(this.state));
  };

  render() {
    return (
      <form className='add-form' onSubmit={this.onFormSubmit}>
        <table>
          <thead className='form-heading'>
            <tr>
              <td>
                <label htmlFor='id'>ID</label>
              </td>
              <td>
                <label htmlFor='firstName'>First Name</label>
              </td>
              <td>
                <label htmlFor='lastName'>Last Name</label>
              </td>
              <td>
                <label htmlFor='email'>E-mail</label>
              </td>
              <td>
                <label htmlFor='phone'>Phone</label>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className='form-body'>
              <td>
                <input
                  type='text'
                  id='id'
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='firstName'
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='lastName'
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='email'
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='phone'
                  onChange={this.onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button>Add Contact</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default ItemAdd;
