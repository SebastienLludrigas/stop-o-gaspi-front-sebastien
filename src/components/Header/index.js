// == Import npm
import React from 'react';

// == Import
import Nav from 'src/containers/Nav';
import LogoGaspi from 'src/components/LogoGaspi';
import MyAccount from 'src/components/MyAccount';

import './header.scss';

// == Composant
const Header = () => (
  <div className="header">
    <LogoGaspi className="logo-gaspi" />
    <div className="right-container">
      <Nav />
      <MyAccount />
    </div>
  </div>
);

// == Export
export default Header;
