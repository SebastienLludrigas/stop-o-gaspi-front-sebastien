// == Import npm
import React from 'react';
import logo from 'src/assets/image/logoStopOGaspi.PNG';

import './logo.scss';


const LogoGaspi = () => (
  <div className="sloganLogo">
    <img className="logo" src={logo} alt="logo stop o gaspi" />
    <h2 className="slogan">COMMENCER A ARRÊTER</h2>
    <h2 className="slogan">DE GASPILLER</h2>
  </div>
);

export default LogoGaspi;
