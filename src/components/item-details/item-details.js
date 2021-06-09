import React from 'react';
import './item-details.css';

const ItemDetails = (props) => {
  console.log(props);
  const { id, firstName, lastName, email, phone } = props.children;
  return (
    <li className='list-item-details'>
      <span>{id}</span>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{email}</span>
      <span>{phone}</span>
    </li>
  );
};

export default ItemDetails;
