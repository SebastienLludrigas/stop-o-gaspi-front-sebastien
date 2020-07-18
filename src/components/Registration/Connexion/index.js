// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// import { useSpring, useChain, animated } from 'react-spring';
import PropTypes from 'prop-types';

// == Import

import '../registration.scss';

// == Composant
const Connexion = ({
  username,
  password,
  onChange,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmitLoggin = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name);
    onChange(evt.target.value, evt.target.name);
  };

  return (
    <div className="connexionPage">
      <div className="login-form">

        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>

        <div className="login-contain ">
          <h2>Se connecter
            <Link to="/inscription">
              <h3>( vous n'avez pas encore de compte ? )</h3>
            </Link>
          </h2>

          <form autoComplete="off" onSubmit={handleSubmitLoggin}>

            <div className="user-contain">
              <input
                type="text"
                name="username"
                required="email"
                onChange={handleChange}
                value={username}
              />
              <label>e-mail</label>
            </div>
            <div className="user-contain">
              <input
                type="text"
                name="password"
                required="password"
                onChange={handleChange}
                value={password}
              />
              <label>Password</label>
            </div>
            <button type="submit">
              <span />
              <span />
              <span />
              <span />
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Connexion.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

Connexion.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};
// == Export
export default Connexion;
