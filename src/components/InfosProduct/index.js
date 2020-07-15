import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './infosProduct.scss';

// == Composant
const infosProduct = ({ handleAddProduct, onChange }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddProduct();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.value);
    onChange(evt.target.value, evt.target.name);
  };

  return (
    <div className="infos-product">
      <form className="infos-product-form" onSubmit={handleSubmit}>
        <input
          type="date"
          className="infos-product-input"
          onChange={handleChange}
          name="dlc"
        />
        <input
          type="number"
          className="infos-product-input"
          onChange={handleChange}
          name="quantite"
        />
        <button
          type="submit"
          className="infos-product-button"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

infosProduct.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default infosProduct;
