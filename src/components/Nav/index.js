// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Twitter from '@bit/feathericons.react-feather.twitter';
import Facebook from '@bit/feathericons.react-feather.facebook';
import Instagram from '@bit/feathericons.react-feather.instagram';

import Burger from './Burger';

import './nav.scss';

// == Composant
const Nav = ({ handleBurger, cross }) => (
  <div className="nav">
    <nav id="row-menu">
      <ul className="row-menu-content">
        <li><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li><NavLink to="/advice-sheet/about" title="Notre vision">Notre vision</NavLink></li>
        <li><NavLink to="/twitter" title="twitter"><Twitter /></NavLink></li>
        <li><NavLink to="/facebook" title="facebook"><Facebook /></NavLink></li>
        <li><NavLink to="/instagram" title="instagram"><Instagram /></NavLink></li>
      </ul>
    </nav>

    <nav id="column-menu">
      <ul className={classNames('column-menu-content', { active: cross })}>
        <li><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li><NavLink to="/advice-sheet/about" title="Notre vision">Notre vision</NavLink></li>
        <li><NavLink to="/twitter" title="twitter"><Twitter /></NavLink></li>
        <li><NavLink to="/facebook" title="facebook"><Facebook /></NavLink></li>
        <li><NavLink to="/instagram" title="instagram"><Instagram /></NavLink></li>
        <li><NavLink to="/settings" title="instagram">Tableau de bord</NavLink></li>
        <li><NavLink to="/pantry" title="instagram">Pantry</NavLink></li>
        <li>Déconnexion</li>
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
