// == Import npm
import React from 'react';
import logo from 'src/assets/image/logoStopOGaspi.PNG';

import './logogaspi.scss';

const LogoGaspi = () => (
  <div className="sloganLogo">
    <img className="logo" src={logo} alt="logo stop o gaspi" />
    <h2 className="slogan">COMMENCER à ARRÊTER</h2>
    <h2 className="slogan">DE GASPILLER</h2>
  </div>
);

export default LogoGaspi;
