import React from 'react';
import { Link } from 'react-router-dom';

// == Import
// import logo from 'src/assets/image/logoStopOGaspi.PNG';
import tomate from 'src/assets/image/tomate.png';
import banane from 'src/assets/image/banane.png';
import coriandre from 'src/assets/image/coriandre.png';
import chouFleur from 'src/assets/image/chouFleur.png';
import oeuf from 'src/assets/image/oeuf.png';
import milk from 'src/assets/image/milk.png';
import frigo from 'src/assets/image/frigo.png';




import './page404.scss';

// == Composant
const Page404 = () => (
  <div className="page_404">

    <div className="central-body">
      <h3 className="slogan404">Gaspille pas ton temps, cette page n'existe plus...</h3>
      <div className="title_404">
        <h2>4</h2>
        <h2>0</h2>
        <h2>4</h2>
      </div>

      <Link to="/">
        <div className="btn-go-home">RETOUR ACCEUIL</div>
      </Link>
    </div>

    <div className="objects">

      <img alt="" className="tomate" src={tomate} width="120px" />
      <img alt="" className="banane" src={banane} width="140px" />
      <img alt="" className="coriandre" src={coriandre} width="140px" />
      <img alt="" className="chouFleur" src={chouFleur} width="180px" />
      <img alt="" className="milk" src={milk} width="180px" />
      <img alt="" className="oeuf" src={oeuf} width="80px" />

      <div className="box_fridge">
        <img alt="" className="object_fridge" src={frigo} width="300px" />
      </div>

    </div>
  </div>
);

// == Export
export default Page404;
