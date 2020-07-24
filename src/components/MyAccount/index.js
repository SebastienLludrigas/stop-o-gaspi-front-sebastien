// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
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
      toggleMenu();
    }}
  >
    <User />
    {toggle ? <p>Mon compte</p> : <p>Mon compte</p>}

    {toggle && (
      <div className="account-menu">
        <ul className="list-menu">
          <li><Link to={isLogged ? '/pantry' : '/connexion'} title="mon garde manger">Pantry</Link></li>
          <div />
          <li><Link to={isLogged ? '/scan-product' : '/connexion'} title="je scanne un produit">je scanne un produit</Link></li>
          <div />
          <li><Link to={isLogged ? '/product' : '/connexion'} title="je rentre un produit sans code-barre">je saisie un produit</Link></li>
          <div />
          <li><Link to={isLogged ? '/settings' : '/connexion'} title="parametre">Tableau de bord</Link></li>
          <div />
          {!isLogged && <li><Link to="/connexion" title="connexion">Connexion</Link></li>}

          {isLogged && (
            <li
              title="connexion"
              onClick={logOut}
            >
              Déconnexion
            </li>
          )}

          {!isLogged && <li><Link to="/inscription" title="inscription">Inscription</Link></li>}
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
