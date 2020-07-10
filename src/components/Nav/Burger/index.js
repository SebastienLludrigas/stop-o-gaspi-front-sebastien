// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './burger.scss';

// == Composant
const Burger = ({ handleBurger, cross }) => (
  <div
    className={classNames('burger', { active: cross })}
    onClick={() => {
      handleBurger();
    }}
  >
    <span />
  </div>
);

Burger.propTypes = {
  handleBurger: PropTypes.func.isRequired,
  cross: PropTypes.bool.isRequired,
};

// == Export
export default Burger;
