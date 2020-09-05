import React from 'react';

import KawaiiAnimation from '../../../utils/kawaiiAnimation';

import caddy from '../../../assets/image/caddieMan.png';

import '../main.scss';

const A = () => (
  <div className="A_main">
    <KawaiiAnimation className="kawaii" />
    <div className="cloudMain clou_A">
      <div className="textMain_A">
        <h2>Bienvenue</h2><br />
        <h3>Vous venez de faire vos courses ?</h3><br />
        <h3>As tu souvent oublié la date de peremption ?</h3><br />
        <h3>tu achètes plein de trucs que tu oublies de manger ? </h3><br />
        <h3>Te rappelles-tu ce que tu as jeté dernièrement?</h3>
        <br />
      </div><p className="nextMain"> suivant {'>>'} </p>
    </div>

    <img className="caddie_home" alt="" src={caddy} />
  </div>
);

export default A;
