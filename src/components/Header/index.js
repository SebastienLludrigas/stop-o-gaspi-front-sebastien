// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import Nav from 'src/containers/Nav';
import LogoGaspi from 'src/components/LogoGaspi';
import MyAccount from 'src/components/MyAccount';
// import { Link } from 'react-router-dom';

import './header.scss';

// == Composant
const Header = ({ toggle, toggleMenu }) => (
  <div className="header">
    <Link exact to="/">
      <LogoGaspi className="logo-gaspi" />
    </Link>
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
