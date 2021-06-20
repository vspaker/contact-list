import React from 'react';
import ItemDetails from '../item-details';
import TableHeading from '../table-heading';

import './item-list.css';

const ItemList = (props) => {
  const { data, sortData, onSearch, searchMode } = props;

  const items =
    data.length > 0
      ? data.map((item) => {
          const { key } = item;
          return <ItemDetails key={key}>{item}</ItemDetails>;
        })
      : null;

  const heading =
    data.length === 0 && !searchMode ? null : (
      <TableHeading sortData={sortData} onSearch={onSearch} />
    );

  return (
    <React.Fragment>
      {heading}
      <ul className='app-ul'>{items}</ul>
    </React.Fragment>
  );
};

export default ItemList;
