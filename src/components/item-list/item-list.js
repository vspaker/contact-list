import React from 'react';
import ItemDetails from '../item-details';
import TableHeading from '../table-heading';

import './item-list.css';

const ItemList = (props) => {
  const { data, ...sortFunctions } = props;

  const items = data
    ? data.map((item) => {
        const { key } = item;
        return <ItemDetails key={key}>{item}</ItemDetails>;
      })
    : null;

  const heading = data ? <TableHeading sortFunctions={sortFunctions} /> : null;

  return (
    <React.Fragment>
      {heading}
      <ul className='app-ul'>{items}</ul>
    </React.Fragment>
  );
};

export default ItemList;
