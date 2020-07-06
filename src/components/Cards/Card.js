// == Import npm
import React from 'react';

// == Import
import emptyVisual from 'src/assets/image/food.png'
import './cards.scss';

// == Composant
const Card = () => (
  <div className="card">
    <img src={emptyVisual} alt="visuel par default" />
    <p className="productTitle"> lait</p>
    <p>DLC : <span className="dlc">01 fevrier 2050</span></p>
    <p>marque : polux</p>
    <p>Date d'ajout : 01 novembre 1901</p>
    <p>quantité : 2000</p>


  </div>
);

// == Export
export default Card;
