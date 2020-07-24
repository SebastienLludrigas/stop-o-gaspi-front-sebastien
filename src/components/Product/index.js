/* eslint-disable camelcase */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

// == Import

import './product.scss';

// == Composant
const Product = ({
  isLogged,
  handmadeProduct,
  onChange,
  name,
  elaboration_date,
  expiration_date,
  quantity,
  redirectToPantry,
  showConfirmAddHandmadeProduct,
}) => {
  // useEffect(() => {
  //   cleanUpRedirect();
  //   console.log('Je clean le redirect !');
  // }, []);

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

      {!showConfirmAddHandmadeProduct && (
        <div className="login-contain ">
          <h2>Ajouter un produit dans mon garde manger.</h2>
          <form onSubmit={handleSubmitLoggin}>
            <div className="user-contain">
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                value={name}
              />
              <label>Nom du produit *</label>
            </div>
            <div className="user-contain">
              <input
                type="date"
                name="elaboration_date"
                onChange={handleChange}
                value={elaboration_date}
              />
              <label>Date de fabriction (si vous avez cuisiné vous même)</label>
            </div>
            <div className="user-contain">
              <input
                type="date"
                name="expiration_date"
                required
                onChange={handleChange}
                value={expiration_date}
              />
              <label>Date de péremption *</label>
            </div>
            <div className="user-contain">
              <input
                type="text"
                name="quantity"
                required
                onChange={handleChange}
                value={quantity}
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
      )}
      {showConfirmAddHandmadeProduct && (
        <div className="confirmAddProduct">
          Ajout de votre produit<br />
          <span className="productName">{name}</span><br />
          au Pantry réussie !
        </div>
      )}
      {!isLogged && <Redirect to="/connexion" />}
      {redirectToPantry && <Redirect to="/pantry" />}

    </div>
  );
};

Product.propTypes = {
  onChange: PropTypes.func.isRequired,
  handmadeProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  elaboration_date: PropTypes.string.isRequired,
  expiration_date: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  redirectToPantry: PropTypes.bool.isRequired,
  showConfirmAddHandmadeProduct: PropTypes.bool.isRequired,
};

// == Export
export default Product;
