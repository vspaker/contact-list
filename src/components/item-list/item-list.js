import React, { Component } from 'react';
import ItemDetails from '../item-details';
import TableHeading from '../table-heading';
import ItemDetailsExtended from '../item-details-extended';

import './item-list.css';

class ItemList extends Component {
  state = {
    itemToExtend: null,
  };

  render() {
    const { data, sortData, onSearch, searchMode } = this.props;

    const onClickHandler = (e, key) => {
      e.stopPropagation();
      const item = data
        .filter((item) => {
          return item.key === key;
        })
        .shift();
      this.setState({ itemToExtend: item });
      // console.log(key);
    };

    const items =
      data.length > 0
        ? data.map((item) => {
            const { key } = item;
            return (
              <ItemDetails
                key={key}
                onClickHandler={(e) => {
                  onClickHandler(e, key);
                }}
              >
                {item}
              </ItemDetails>
            );
          })
        : null;

    const heading =
      data.length === 0 && !searchMode ? null : (
        <TableHeading sortData={sortData} onSearch={onSearch} />
      );

    const itemToExtend = this.state.itemToExtend;

    const extendedDetails = itemToExtend ? (
      <ItemDetailsExtended item={itemToExtend} />
    ) : null;

    return (
      <React.Fragment>
        {heading}
        <ul className='app-ul'>{items}</ul>
        {extendedDetails}
      </React.Fragment>
    );
  }
}

export default ItemList;
