import React from 'react';
import KawaiiAnimation from '../../../utils/kawaiiAnimation';
import { Link } from 'react-router-dom';

import '../main.scss';

const C = () => (
  <div className="A_main">
    <KawaiiAnimation className="kawaii" />
    <div className="cloudMain cloud_C">
      <div className="textMain_A">
        <h2>et toi tu es ?</h2><br />
        <h3>pain au chocolat</h3><br />
        <h3>ou</h3><br />
        <h3>Chocolatine</h3><br />
        <Link to="/inscription">
          <h3 className="registerYou">sinon Inscris toi ici pour commencer</h3>
        </Link>

        <br />
      </div>
      <p className="nextMain"> suivant {">>"} </p>
    </div>

  </div>

);

export default C;
