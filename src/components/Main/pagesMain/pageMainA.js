import React from 'react';

import KawaiiAnimation from '../../../utils/kawaiiAnimation';

import caddy from '../../../assets/image/caddieMan.png';

import '../main.scss';

const A = () => (
    <div className="A_main">
      <KawaiiAnimation className="kawaii" />
      <div className="cloudMain ">
        <div className="textMain_A">
          <h2>Bienvenue</h2><br />
          <h3>Vous venez de faire vos courses ?</h3><br />
          <h3>As tu souvent oublier la date de peremption ?</h3><br />
          <h3>tu achètes plein de trucs que tu oublies de manger ? ?</h3><br />
          <h3>Te rappelles tu ce que tu as jeter dernierment?</h3>
          <br />
        </div>

      </div>

      <img className="caddie_home" alt="" src={caddy} />
      <div className="btn_transHome">
        <span className="fas fa-angle-double-right" />
      </div>
    </div>
);


export default A;
