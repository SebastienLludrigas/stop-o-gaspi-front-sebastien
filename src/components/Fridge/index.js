/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';

import './fridge.scss';

const Fridge = () => (
  <div className="fridge--container">
    <input id="freezer-toggle" type="checkbox" />
    <label htmlFor="freezer-toggle" />
    <input id="fridge-toggle" type="checkbox" />
    <label htmlFor="fridge-toggle" />
  </div>

);

/* Fridge.propTypes = {
  cross: PropTypes.bool.isRequired,
}; */

export default Fridge;
