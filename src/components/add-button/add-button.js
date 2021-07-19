import React from 'react';
import './add-button.css';

const AddButton = (props) => {
  const { onNewPersonButtonClick } = props;
  return <button onClick={onNewPersonButtonClick}>+ Add New Person</button>;
};

export default AddButton;
