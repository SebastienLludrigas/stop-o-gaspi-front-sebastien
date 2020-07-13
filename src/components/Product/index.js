// == Import npm
import React from 'react';

// == Import

import './product.scss';

// == Composant
const Product = () => (
  <div className="productPage">
    <div className="login-contain ">
      <h2>Ajouter un produit dans mon garde manger.</h2>
      <form>
        <div className="user-contain">
          <input type="text" name="" required="" />
          <label>Nom du produit *</label>
        </div>
        <div className="user-contain">
          <input type="date" name="" required="" />
          <label>Date de fabriction (si vous avez cuisiné vous même)</label>
        </div>
        <div className="user-contain">
          <input type="date" name="" required="" />
          <label>Date de péremption *</label>
        </div>
        <div className="user-contain">
          <input type="number" name="" required="" />
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

// == Export
export default Product;
