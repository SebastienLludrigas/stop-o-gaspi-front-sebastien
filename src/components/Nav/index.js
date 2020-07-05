// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import Twitter from '@bit/feathericons.react-feather.twitter';
import Facebook from '@bit/feathericons.react-feather.facebook';
import Instagram from '@bit/feathericons.react-feather.instagram';

import Burger from './Burger';

import './nav.scss';

// == Composant
const Nav = () => (
  <div className="nav">
    <nav id="row-menu">
      <ul className="principal-nav-container">
        <li><NavLink to="/" title="Accueil">Accueil</NavLink></li>
        <li><NavLink to="/advice-sheet/about" title="Notre vision">Notre vision</NavLink></li>
        <li><NavLink to="/twitter" title="twitter"><Twitter /></NavLink></li>
        <li><NavLink to="/facebook" title="facebook"><Facebook /></NavLink></li>
        <li><NavLink to="/instagram" title="instagram"><Instagram /></NavLink></li>
      </ul>
    </nav>
    <Burger />
  </div>
);

// == Export
export default Nav;
