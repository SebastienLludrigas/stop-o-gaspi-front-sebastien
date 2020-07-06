// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Burger from './Burger';

import './nav.scss';

// == Composant
const Nav = ({ handleBurger, cross }) => (
  <div className="nav">
    <nav id="row-menu">
      <ul className="row-menu-content">
        <li><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li><NavLink to="/advice-sheet/about" title="Notre vision">Notre vision</NavLink></li>
      </ul>
      <ul className="row-social-media">
        <li><NavLink to="/twitter" title="twitter"><span className="fab fa-twitter" /></NavLink></li>
        <li><NavLink to="/facebook" title="facebook"><span className="fab fa-facebook" /></NavLink></li>
        <li><NavLink to="/instagram" title="instagram"><span className="fab fa-instagram" /></NavLink></li>
        <li><NavLink to="/instagram" title="snapchat"><span className="fab fa-snapchat" /></NavLink></li>
      </ul>
    </nav>

    <nav id="column-menu">
      <ul className={classNames('column-menu-content', { active: cross })}>
        <li className="nav"><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li className="nav"><NavLink to="/advice-sheet/about" title="Notre vision">Notre vision</NavLink></li>
        <li className="nav"><NavLink to="/settings" title="instagram">Tableau de bord</NavLink></li>
        <li className="nav"><NavLink to="/pantry" title="instagram">Pantry</NavLink></li>
        <li className="nav">Connexion</li>
        <li className="nav">Inscription</li>
        <div className="social-media">
          <li><p>Réseaux sociaux</p></li>
          <div className="social-media-container">
            <li><NavLink to="/twitter" title="twitter"><span className="fab fa-twitter" /></NavLink></li>
            <li><NavLink to="/facebook" title="facebook"><span className="fab fa-facebook" /></NavLink></li>
            <li><NavLink to="/instagram" title="instagram"><span className="fab fa-instagram" /></NavLink></li>
            <li><NavLink to="/instagram" title="snapchat"><span className="fab fa-snapchat" /></NavLink></li>
          </div>
        </div>
      </ul>
    </nav>
    <Burger handleBurger={handleBurger} cross={cross} />
  </div>
);

Nav.propTypes = {
  handleBurger: PropTypes.func.isRequired,
  cross: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
