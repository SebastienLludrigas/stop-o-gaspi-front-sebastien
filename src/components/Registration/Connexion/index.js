// == Import npm
import React from 'react';
// import { useSpring, useChain, animated } from 'react-spring';
import PropTypes from 'prop-types';

// == Import

import '../registration.scss';

// == Composant
const Connexion = ({
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
    onChange(evt.target.value, evt.target.name);
  };

  return (
    <div className="connexionPage">
      <div className="login-form">
        {isLogged && ( // TODO
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
        )}
        {!isLogged && (

        <div className="login-contain ">
          <h2>Login</h2>
          <form autoComplete="off" onSubmit={handleSubmitLoggin}>
            <div className="user-contain">
              <input
                type="text"
                name="email"
                required="email"
                onChange={handleChange}
              />
              <label>e-mail</label>
            </div>
            <div className="user-contain">
              <input
                type="password"
                name="password"
                required="Password"
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <button type="submit">
              <span />
              <span />
              <span />
              <span />
              Submit
            </button>
          </form>
        </div>
        )};
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
};

Connexion.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};
// == Export
export default Connexion;
