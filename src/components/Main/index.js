// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// == Import

import './main.scss';

// == Composant
const Main = ({ datas, handleDatas }) => (
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
    <div className="datas">
      {datas}
    </div>
  </div>
);

Main.propTypes = {
  datas: PropTypes.array.isRequired,
  handleDatas: PropTypes.func.isRequired,
};

// == Export
export default Main;
