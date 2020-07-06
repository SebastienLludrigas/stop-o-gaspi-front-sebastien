// == Import npm
import React from 'react';

// == Import
import Cards from '../Cards';

import './pantry.scss';

// == Composant
const Pantry = () => (
  <div className="pantry">
    <h1 className="pantryTitle">MON PANTRY</h1>
    <h2 className="label_pantry">Ajouter un nouveau produit</h2>
    <div className="pantry_buttons">
      <div className="btn_manual btn">Je saisie mon produit</div>
      <div className="btn_scan btn">Je scanne mon produit</div>
    </div>

    <Cards />
  </div>
);

// == Export
export default Pantry;
