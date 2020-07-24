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
        <li><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li><NavLink to="/about" title="Notre équipe">Notre équipe</NavLink></li>
      </ul>
      <ul className="row-social-media">
        <li><NavLink to="/twitter" title="twitter"><span className="fab fa-twitter" /></NavLink></li>
        <li><NavLink to="/facebook" title="facebook"><span className="fab fa-facebook" /></NavLink></li>
        <li><NavLink to="/instagram" title="instagram"><span className="fab fa-instagram" /></NavLink></li>
        <li><NavLink to="/snapchat" title="snapchat"><span className="fab fa-snapchat" /></NavLink></li>
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
            to="/about"
            title="Notre vision"
            onClick={() => {
              handleBurger();
            }}
          >Notre équipe
          </NavLink>
        </li>

        <li className="nav">
          <NavLink
            to={isLogged ? '/dashboard' : '/connexion'}
            title="DashBoard"
            onClick={() => {
              handleBurger();
            }}
          >Tableau de bord
          </NavLink>
        </li>

        <li className="nav">
          <NavLink
            to={isLogged ? '/pantry' : '/connexion'}
            title="Garde Manger"
            onClick={() => {
              handleBurger();
            }}
          >Pantry
          </NavLink>
        </li>

        {isLogged && (
          <li
            className="nav"
            onClick={logOut}
          >
            Déconnexion
          </li>
        )}

        {!isLogged && (
          <li className="nav">
            <Link
              to="/connexion"
              title="Connexion"
              onClick={() => {
                handleBurger();
              }}
            >Connexion
            </Link>
          </li>
        )}

        {!isLogged && (
          <li className="nav">
            <Link
              to="/inscription"
              title="inscription"
              onClick={() => {
                handleBurger();
              }}
            >Inscription
            </Link>
          </li>
        )}

        <div className="social-media">
          <li><p>Réseaux sociaux</p></li>
          <div className="social-media-container">
            <li><NavLink to="/twitter" title="twitter"><span className="fab fa-twitter" /></NavLink></li>
            <li><NavLink to="/facebook" title="facebook"><span className="fab fa-facebook" /></NavLink></li>
            <li><NavLink to="/instagram" title="instagram"><span className="fab fa-instagram" /></NavLink></li>
            <li><NavLink to="/snapchat" title="snapchat"><span className="fab fa-snapchat" /></NavLink></li>
          </div>
        </div>
      </ul>
    </nav>
    <Burger handleBurger={handleBurger} cross={cross} />
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
