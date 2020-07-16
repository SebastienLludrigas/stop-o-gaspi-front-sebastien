// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './product.scss';

// == Composant
const Product = ({
  handmadeProduct,
  onChange,
  productName,
  manufactureDate,
  expirationDate,
  productQuantity,
}) => {
  const handleSubmitLoggin = (evt) => {
    evt.preventDefault();
    handmadeProduct();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name);
    onChange(evt.target.value, evt.target.name);
  };

  return (
    <div className="productPage">
      <div className="login-contain ">
        <h2>Ajouter un produit dans mon garde manger.</h2>
        <form onSubmit={handleSubmitLoggin}>
          <div className="user-contain">
            <input
              type="text"
              name="productName"
              required
              onChange={handleChange}
              value={productName}
            />
            <label>Nom du produit *</label>
          </div>
          <div className="user-contain">
            <input
              type="date"
              name="manufactureDate"
              onChange={handleChange}
              value={manufactureDate}
            />
            <label>Date de fabriction (si vous avez cuisiné vous même)</label>
          </div>
          <div className="user-contain">
            <input
              type="date"
              name="expirationDate"
              required
              onChange={handleChange}
              value={expirationDate}
            />
            <label>Date de péremption *</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="productQuantity"
              required
              onChange={handleChange}
              value={productQuantity}
            />
            <label>Quantité</label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

Product.propTypes = {
  onChange: PropTypes.func.isRequired,
  handmadeProduct: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  manufactureDate: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  productQuantity: PropTypes.string.isRequired,
};

// == Export
export default Product;
