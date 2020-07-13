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
    <div className="main_left"><Fridge /></div>
    <div className="main_right">
      <div className="textMain">
        <div id="container">
        Toi aussi tu te dis que gâcher :
          <div id="flip">
            <div><div>c'est nul</div></div>
            <div><div>c'est de l'argent perdu</div></div>
            <div><div>j'en ai marre</div></div>
          </div>
        </div>
        <br />
        Tu te fais avoir à chaque fois que tu fais les courses,
        tu achètes plein de trucs que tu oublies de manger ?
        <br /><br />
        Et bien nous aussi, c’est humain.
        <br /><br />

        Heureusement tu viens de trouver une solution à ce problème afin de dire STOP’O’GASPI.
      </div>


    </div>


    {/* <button
      className="button-tests"
      type="button"
      onClick={sendDatas}
    >Envoyer des données
    </button>
    <button
      className="button-tests"
      type="button"
      onClick={handleDatas}
    >Récupérer des données
    </button> */}
  </div>
);

Main.propTypes = {
  handleDatas: PropTypes.func.isRequired,
  sendDatas: PropTypes.func.isRequired,
};

// == Export
export default Main;
