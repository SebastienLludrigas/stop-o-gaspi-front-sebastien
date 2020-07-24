// == Import npm
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// == Import
import Phone from '@bit/feathericons.react-feather.phone';
import Mail from '@bit/feathericons.react-feather.mail';

import './footer.scss';

// == Composant
const Footer = () => (
  <footer>

    <div className="aboutUs">
      <h3 className="footerTitle">Stop O'Gaspi :</h3>
      <ul>
        <Link to="/about" className="footerHoover">
          <li>Qui sommes nous ?</li>
        </Link>
        <Link to="/join-us" className="footerHoover">
          <li>Nous rejoindre</li>
        </Link>


      </ul>
    </div>

    <div className="contact">
      <h3 className="footerTitle">Contact :</h3>

      <ul className="lienContact">
        <Link to="/advice-sheet/about" className="footerHoover">
          <li> <Phone size="15" /> </li>
        </Link>
        <Link to="/advice-sheet/about" className="footerHoover">
          <li> <Mail size="15" /> </li>
        </Link>
        <Link to="/advice-sheet/faq" className="footerHoover">
          <li>FAQ</li>
        </Link>
      </ul>

      <p><span>2020 @copyright Stop O'Gaspi |</span>
        <Link to="/advice-sheet/legal-mentions" className="footerHoover">
          <li> Mentions Légales</li>
        </Link>
      </p>
    </div>
    <div className="blogCommunauty">
      <Link to="/blog" className="footerHoover">
        <li className="footerHoover footerTitle">Blog</li>
      </Link>
      <Link to="/communauty" className="footerHoover">
        <li className="footerHoover footerTitle">Communauté</li>
      </Link>
    </div>
  </footer>
);

// == Export
export default Footer;
