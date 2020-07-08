// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// == Import
import Fridge from 'src/components/Fridge';
import './main.scss';

// == Composant
const Main = ({ handleDatas, sendDatas }) => (
  <div className="main">
    <h1 className="titleMain">Bienvenue à toi Gaspi Hunter.</h1>
    <Fridge />
    <p className="textMain">
      Toi aussi tu te dis que gâcher c’est nul?
      <br />
      <br />
      Tu te fais avoir à chaque fois que tu fais les courses,
      tu achètes plein de trucs que tu oublies de manger ?
      <br /><br />
      Et bien nous aussi, c’est humain.
      <br /><br />
      Heureusement on a réfléchi et trouvé une solution à ce problème afin de dire STOP’O’GASPI.
    </p>
    <button
      className="buttonDatas"
      type="button"
      onClick={() => {
        handleDatas();
      }}
    >
      Afficher les données
    </button>
    <button
      className="buttonDatas2"
      type="button"
      onClick={() => {
        sendDatas();
      }}
    >
      Envoyer des données
    </button>

  </div>
);

Main.propTypes = {
  handleDatas: PropTypes.func.isRequired,
  sendDatas: PropTypes.func.isRequired,
};

// == Export
export default Main;
