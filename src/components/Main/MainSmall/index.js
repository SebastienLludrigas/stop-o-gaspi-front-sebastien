import React from 'react';
import { Link } from 'react-router-dom';

import './mainSmall.scss';

const MainSmall = () => (
  <div className="mainSmall">
    <div className="cardSmall">
      <h2>Bienvenue</h2><br />
      <h3>Vous venez de faire vos courses ?</h3><br />
      <h3>As tu souvent oublié la date de peremption ?</h3><br />
      <h3>tu achètes plein de trucs que tu oublies de manger ?</h3><br />
      <h3>Te rappelles tu ce que tu as jeté dernierement ?</h3>
      <br />
      <h2>Et si je pouvais t'aider ?</h2><br />
      <h3>Donne moi le code barre de tes produits</h3><br />
      <h3>la date de péremption</h3><br />
      <h3>avec une quantité, c'est mieux.</h3><br />
      <h3>Et je te dis lorsque qu'un de tes produits</h3>
      <h3>arrive à la fin de sa date de consommation</h3>
      <br />
      <h2>et toi tu es ?</h2><br />
      <h3>pain au chocolat</h3><br />
      <h3>ou</h3><br />
      <h3>Chocolatine</h3><br />
      <Link to="/inscription">
        <h3 className="registerYou">sinon Inscris toi ici pour commencer</h3>
      </Link>
    </div>
  </div>
);

export default MainSmall;
