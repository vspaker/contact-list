import React from 'react';
import './item-details.css';

const ItemDetails = (props) => {
  const { id, firstName, lastName, email, phone } = props.children;
  const { onClickHandler } = props;
  return (
    <tr className='list-item-details' onClick={onClickHandler}>
      <td>
        <span>{id}</span>
      </td>
      <td>
        <span>{firstName}</span>
      </td>
      <td>
        <span>{lastName}</span>
      </td>
      <td>
        <span>{email}</span>
      </td>
      <td>
        <span>{phone}</span>
      </td>
    </tr>
  );
};

export default ItemDetails;
