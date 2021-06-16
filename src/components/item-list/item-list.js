import React, { Component } from 'react';
import ItemDetails from '../item-details';
import TableHeading from '../table-heading';

import './item-list.css';

class ItemList extends Component {
  render() {
    const { data, sortData } = this.props;

    const items =
      data.length > 0
        ? data.map((item) => {
            const { key } = item;
            return <ItemDetails key={key}>{item}</ItemDetails>;
          })
        : null;

    const heading =
      data.length > 0 ? <TableHeading sortData={sortData} /> : null;

    return (
      <React.Fragment>
        {heading}
        <ul className='app-ul'>{items}</ul>
      </React.Fragment>
    );
  }
}

export default ItemList;
