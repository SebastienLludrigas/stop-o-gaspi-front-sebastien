// == Import npm
import React from 'react';

// == Import
import Phone from '@bit/feathericons.react-feather.phone';
import Mail from '@bit/feathericons.react-feather.mail';

import './footer.scss';

// == Composant
const Footer = () => (
  <footer>
    <div>
      <h3 className="footerTitle">Stop O'Gaspi :</h3>
      <ul>
        <li className="footerHoover"> <a href="#">Qui sommes nous ?</a> </li>
        <li className="footerHoover"> <a href="#">Nous rejoindre</a> </li>
      </ul>

    </div>
    <div className="contact">
      <h3 className="footerTitle">Contact :</h3>

      <ul className="lienContact">
        <li className="footerHoover"><a href="#"> <Phone size="15" /> </a> </li>
        <li className="footerHoover"><a href="#"> <Mail size="15" /> </a> </li>
        <li className="footerHoover"><a href="#">FAQ</a></li>
      </ul>
      <p>2020 @copyright Stop O'Gaspi | <a className="footerHoover" href="#">Mentions Légales</a></p>

    </div>
    <div className="blogCommunautiy">
      <h3 className="footerHoover footerTitle"><a href="#">Blog</a></h3>
      <ul>
        <li className="footerHoover"><a href="#" className="footerTitle">Communauté</a></li>
      </ul>
    </div>
  </footer>
);
// “/about”“/legal-mentions”	“/sitemap

// == Export
export default Footer;
