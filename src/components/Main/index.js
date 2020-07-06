// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// == Import

import './main.scss';

// == Composant
const Main = ({ handleDatas }) => (
  <div className="main">
    <button
      className="buttonDatas"
      type="button"
      onClick={() => {
        handleDatas();
      }}
    >
      Afficher les données
    </button>
  </div>
);

Main.propTypes = {
  handleDatas: PropTypes.func.isRequired,
};

// == Export
export default Main;
