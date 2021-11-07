import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './infosProduct.scss';

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
      <h2 className="infos-product-title">Votre scan a réussi</h2>
      <form className="infos-product-form" onSubmit={handleSubmit}>
        Entrez maintenant la date limite de consommation<br />
        <input
          type="date"
          className="infos-product-input"
          onChange={handleChange}
          name="dlc"
        />
        ainsi que la quantité, puis validez pour enregistrer<br />

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
      <div className="img_barcode" />
    </div>
  );
};

infosProduct.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default infosProduct;
