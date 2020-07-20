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
// test
// == Composant
const Header = ({
  toggle,
  toggleMenu,
  logOut,
  isLogged,
}) => (
  <div className="header">
    <Link to="/">
      <LogoGaspi className="logo-gaspi" />
    </Link>
    <div className="right-container">
      <Nav />
      <MyAccount
        toggleMenu={toggleMenu}
        toggle={toggle}
        isLogged={isLogged}
        logOut={logOut}
      />
    </div>
    <div className="cloud n1" />
    <div className="cloud n2" />
    <div className="cloud n3" />

  </div>
);

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Header;
