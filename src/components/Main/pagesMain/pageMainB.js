import React from 'react';
import KawaiiAnimation from '../../../utils/kawaiiAnimation';

import '../main.scss';

const B = () => (
  <div className="A_main">
  <KawaiiAnimation className="kawaii" />
    <div className="cloudMain cloud_B">
      <div className="textMain_A">
        <h2>Et si je pouvais t'aider ?</h2><br />
        <h3>Donne moi le code barre de tes produits</h3><br />
        <h3>la date de peremption</h3><br />
        <h3>avec une quantité, c'est mieux.</h3><br />
        <h3>Et je te dis lorsque qu'un de tes produits</h3>
        <h3>arrive à la fin de sa date de consommation</h3>

        <br />
      </div>
      <p className="nextMain"> suivant {">>"} </p>

    </div>
</div>
);

export default B;
