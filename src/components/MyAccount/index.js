// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import User from '@bit/feathericons.react-feather.user';

import './myaccount.scss';

// == Composant
const MyAccount = ({
  toggle,
  toggleMenu,
  isLogged,
  logOut,
}) => (
  <div
    className="my-account"
    onClick={() => {
      console.log(toggle);
      toggleMenu();
    }}
  >
    <p>Mon compte</p>
    <User />
    {toggle && (
      <div className="account-menu">
        <ul className="list-menu">
          <li><Link to="/settings" title="instagram">Tableau de bord</Link></li>
          <div />
          <li><Link to="/pantry" title="instagram">Pantry</Link></li>
          <div />
          <li><Link to="/connexion" title="connexion">Connexion</Link></li>

          <li
            title="connexion"
            onClick={logOut}
          >
            Déconnexion
          </li>

          <div />
          <li><Link to="/inscription" title="inscription">Inscription</Link></li>
        </ul>
      </div>
    )}
  </div>
);

MyAccount.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default MyAccount;
