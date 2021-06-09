import React from 'react';
import ItemDetails from '../item-details';

import './item-list.css';

const ItemList = (props) => {
  const { data } = props;

  const items = data
    ? data.map((item) => {
        const { key } = item;
        return <ItemDetails key={key}>{item}</ItemDetails>;
      })
    : null;

  return <ul className='app-ul'>{items}</ul>;
};

export default ItemList;
