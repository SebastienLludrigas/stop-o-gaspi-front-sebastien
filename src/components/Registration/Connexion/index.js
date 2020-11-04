// == Import npm
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

// == Import
import './successLogged.scss';
import '../registration.scss';

// == Composant
const Connexion = ({
  username,
  password,
  onChange,
  handleLogin,
  isLogged,
  errorMessage,
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
      {errorMessage.length > 0 && (
        <div className="errorMessages">
          {errorMessage}
        </div>
      )}
      <div className="login-form">
        {isLogged && <Redirect to="/pantry" />}
        {!isLogged && (
          <div className="login-contain ">
            <h2>Se connecter
              <Link to="/inscription">
                <h3>( vous n'avez pas encore de compte ? )</h3>
              </Link>
            </h2>

            <form autoComplete="off" onSubmit={handleSubmitLoggin}>

              <div className="user-contain">
                <input
                  type="email"
                  name="username"
                  required="email"
                  onChange={handleChange}
                  value={username}
                />
                <label>E-mail</label>
              </div>
              <div className="user-contain">
                <input
                  type="password"
                  name="password"
                  required="password"
                  onChange={handleChange}
                  value={password}
                />
                <label>Mot de passe</label>
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
        )}
      </div>
    </div>
  );
};

Connexion.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  // userInfos: PropTypes.object.isRequired,
};

Connexion.defaultProps = {
  isLogged: false,
};
// == Export
export default Connexion;
