import React, { useState } from "react";

import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length > 2) {
        setCategorias((cats) => [inputValue, ...cats, ]);
        setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={inputValue} onChange={handleInputValue} />
    </form>
  );
};


AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
