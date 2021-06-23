import React from 'react';
import './item-details.css';

const ItemDetails = (props) => {
  const { id, firstName, lastName, email, phone } = props.children;
  const { onClickHandler } = props;
  return (
    <li className='list-item-details' onClick={onClickHandler}>
      <span>{id}</span>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{email}</span>
      <span>{phone}</span>
    </li>
  );
};

export default ItemDetails;
