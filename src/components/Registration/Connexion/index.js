// == Import npm
import React from 'react';
// import { useSpring, useChain, animated } from 'react-spring';
import PropTypes from 'prop-types';

// == Import

import '../registration.scss';

// == Composant
const Connexion = ({
  email,
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

        {isLogged && (

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
                value={email}
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
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

Connexion.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};
// == Export
export default Connexion;
