import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './dlcInput.scss';

// == Composant
const DlcInput = ({ handleAddProduct, dlcChange }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddProduct();
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    dlcChange(evt.target.value);
  };

  return (
    <div className="dlc">
      <form className="dlc-form" onSubmit={handleSubmit}>
        <input type="date" className="dlc-input" onChange={handleChange} />
        <button
          type="submit"
          className="dlc-button"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

DlcInput.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  dlcChange: PropTypes.func.isRequired,
};

// == Export
export default DlcInput;
