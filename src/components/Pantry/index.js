// == Import npm
import React from 'react';

// == Import
import Cards from '../Cards';

import './pantry.scss';

// == Composant
const Pantry = () => (
  <div className="pantry">
    <h1 className="pantryTitle">MON PANTRY</h1>

    <Cards />
  </div>
);

// == Export
export default Pantry;
