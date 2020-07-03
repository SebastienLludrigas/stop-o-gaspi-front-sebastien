// == Import npm
import React from 'react';

import './fridge.scss';

const fridge = () => (
  <div className="frigo">
    <div className="fridge--container">
      <input id="freezer-toggle" type="checkbox" />
      <label htmlFor="freezer-toggle" />
      <input id="fridge-toggle" type="checkbox" />
      <label htmlFor="fridge-toggle" />
    </div>
  </div>

);

export default fridge;
