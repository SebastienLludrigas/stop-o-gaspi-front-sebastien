// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import LogoGaspi from 'src/components/LogoGaspi';
import MyAccount from 'src/components/MyAccount';
import { Link } from 'react-router-dom';

import './header.scss';

// == Composant
const Header = ({ toggle, toggleMenu }) => (
  <div className="header">
    <LogoGaspi className="logo-gaspi" />
    <div className="right-container">
      <Nav />
      <MyAccount
        toggleMenu={toggleMenu}
        toggle={toggle}
      />
    </div>
  </div>
);

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

// == Export
export default Header;
