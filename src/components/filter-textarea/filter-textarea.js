import React from 'react';
import './filter-textarea.css';

const FilterTextarea = (props) => {
  const { onSearch } = props;
  const textRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = textRef.current.value;
    onSearch(text);
  };

  return (
    <div>
      <input type='text' className='filter-input' ref={textRef}></input>
      <button className='filter-button' onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default FilterTextarea;
