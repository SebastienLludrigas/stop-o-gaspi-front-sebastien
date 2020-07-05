// == Import npm
import React from 'react';

// == Import
import Nav from 'src/components/Nav';
import LogoGaspi from 'src/components/LogoGaspi';
import User from '@bit/feathericons.react-feather.user';

import './header.scss';

// == Composant
const Header = () => (
  <div className="header">
    <LogoGaspi className="logo-gaspi" />
    <div className="right-container">
      <Nav />
      <div className="my-account">
        <p>Mon compte</p>
        <User />
      </div>
    </div>
  </div>
);

// == Export
export default Header;
