import React, { Component } from 'react';
import './item-add.css';

class ItemAdd extends Component {
  state = {
    id: ``,
    firstName: ``,
    lastName: ``,
    email: ``,
    phone: ``,
    idValid: false,
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    phoneValid: false,
    formValid: false,
  };

  onChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value }, () => {
      this.validateField(key, value);
    });
  };

  validateField = (fieldName, value) => {
    let idValid = this.state.idValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    const digits = /^\d+$/;
    const letters = /^[а-яА-ЯёЁa-zA-Z]+$/;
    const email = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const phone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

    switch (fieldName) {
      case 'id':
        idValid = Boolean(value.match(digits));
        break;
      case 'firstName':
        firstNameValid = Boolean(value.match(letters));
        break;
      case 'lastName':
        lastNameValid = Boolean(value.match(letters));
        break;
      case 'email':
        emailValid = Boolean(value.match(email));
        break;
      case 'phone':
        phoneValid = Boolean(value.match(phone));
        break;
      default:
        break;
    }
    this.setState(
      {
        idValid,
        firstNameValid,
        lastNameValid,
        emailValid,
        phoneValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid:
        this.state.idValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.emailValid &&
        this.state.phoneValid,
    });
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
                  placeholder='001'
                  value={this.state.id}
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='firstName'
                  placeholder='John'
                  value={this.state.firstName}
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Smith'
                  value={this.state.lastName}
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='email'
                  placeholder='John.Smith@gmail.com'
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                ></input>
              </td>
              <td>
                <input
                  type='text'
                  id='phone'
                  placeholder='+79030000000'
                  value={this.state.phone}
                  onChange={this.onChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <button disabled={!this.state.formValid}>Add Contact</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default ItemAdd;
