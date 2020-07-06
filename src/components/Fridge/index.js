/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './fridge.scss';

const Fridge = ({ cross }) => (
  <div className={classNames('frigo', { active: cross })}>
    <div className="fridge--container">
      <input id="freezer-toggle" type="checkbox" />
      <label htmlFor="freezer-toggle" />
      <input id="fridge-toggle" type="checkbox" />
      <label htmlFor="fridge-toggle" />
    </div>
  </div>

);

Fridge.propTypes = {
  cross: PropTypes.bool.isRequired,
};

export default Fridge;
