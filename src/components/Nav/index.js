// == Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Burger from './Burger';

import './nav.scss';

// == Composant
const Nav = ({
  handleBurger,
  cross,
  isLogged,
  logOut,
}) => (
  <div className="nav">

    <nav id="row-menu">
      <ul className="row-menu-content">
        <li><NavLink exact to="/" activeClassName="selectedActive" title="Accueil">Accueil</NavLink></li>
        {isLogged && (<li><NavLink to="/pantry" activeClassName="selectedActive" title="Mes produits">Mon Pantry</NavLink></li>)}
      </ul>
    </nav>


    <nav id="column-menu">
    
      <ul className={classNames('column-menu-content', { active: cross })}>

        <li className="nav">
          <NavLink
            to="/"
            title="Accueil"
            onClick={() => {
              handleBurger();
            }}
          >Accueil
          </NavLink>
        </li>

        <li className="nav">
          <NavLink

            to="/pantry"
            title="Mon garde manger"
            onClick={() => {
              handleBurger();
            }}
          >Pantry

          </NavLink>
        </li>

        <li className="nav">
          <NavLink
            to={isLogged ? '/settings' : '/connexion'}
            title="DashBoard"
            onClick={() => {
              handleBurger();
            }}
          >Tableau de bord
          </NavLink>
        </li>

        {isLogged && (
          <li
            className="nav"
            onClick={logOut
            }}
          >
            Déconnexion
          </li>
        )}

        <div className="social-media">
          <div className="social-media-container">
            <li><NavLink to="/twitter" title="twitter"><span className="fab fa-twitter" onClick={() => { handleBurger(); }} /></NavLink></li>
            <li><NavLink to="/facebook" title="facebook"><span className="fab fa-facebook" onClick={() => { handleBurger(); }} /></NavLink></li>
            <li><NavLink to="/instagram" title="instagram"><span className="fab fa-instagram" onClick={() => { handleBurger(); }} /></NavLink></li>
            <li><NavLink to="/snapchat" title="snapchat"><span className="fab fa-snapchat" onClick={() => { handleBurger(); }} /></NavLink></li>
            <br />
          </div>
        </div>
      </ul>
    
    </nav>

    {isLogged && <Burger handleBurger={handleBurger} cross={cross} />}

  </div>
);

Nav.propTypes = {
  handleBurger: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  cross: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
