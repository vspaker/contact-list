import React from 'react';
import './item-details-extended.css';

const ItemDetailsExtended = (props) => {
  const { item } = props;
  const { firstName, lastName, description, address } = item;
  const { streetAddress, city, state, zip } = address;
  return (
    <div className='extended-details'>
      <span>
        Выбран пользователь{' '}
        <b>
          {firstName} {lastName}
        </b>
      </span>
      <span>
        Описание:
        <textarea value={description} readOnly></textarea>
      </span>
      <span>
        Адрес проживания: <b>{streetAddress}</b>
      </span>
      <span>
        Город: <b>{city}</b>
      </span>
      <span>
        Провинция/штат: <b>{state}</b>
      </span>
      <span>
        Индекс: <b>{zip}</b>
      </span>
    </div>
  );
};

export default ItemDetailsExtended;
