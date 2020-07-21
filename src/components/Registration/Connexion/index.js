// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// import { useSpring, useChain, animated } from 'react-spring';
import PropTypes from 'prop-types';

// == Import
import tomate from 'src/assets/image/tomate.png';
import './successLogged.scss';
import '../registration.scss';

// == Composant
const Connexion = ({
  username,
  password,
  onChange,
  info,
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
            <div className="login-form-message">
              <div id="containerSuccess">
                <div id="success-box">
                  <div className="face">
                    <img
                      className="tomate_face_success"
                      src={tomate}
                      alt=""
                    />
                    <div className="eye" />
                    <div className="eye right" />
                    <div className="mouth happy" />
                  </div>
                  <div className="shadow scale" />
                  <div className="message"><h1 className="alert">Bonjour !</h1><p className="successHello">C'est une belle journée {info}</p></div>
                  <Link to="/pantry">
                    <button
                      type="button"
                      className="button-box"
                    >
                      <h1
                        className="greenSuccess"
                      >
                        Mon Pantry
                      </h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

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
        )}
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
