// == Import npm
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './registration.scss';

// == Composant
const Registration = ({
  successfulRegistration,
  handleRegistration,
  onChangeRegistration,
  email,
  name,
  City,
  password,
  verifPassword,
  pseudo,
}) => {
  const handleSubmitLoggin = (evt) => {
    evt.preventDefault();
    handleRegistration();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name);
    onChangeRegistration(evt.target.value, evt.target.name);
  };

  return (
    <div className="inscriptionPage">
      <div className="contain-inscription login-contain">
        <h2>S'inscrire
          <Link to="/connexion">
            <h3>( vous avez déja un compte ? )</h3>
          </Link>
        </h2>
        <form onSubmit={handleSubmitLoggin}>
          <div className="user-contain">
            <input
              type="email"
              name="registrationEmail"
              required
              onChange={handleChange}
              value={email}
            />
            <label>e-mail</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="registrationName"
              required
              onChange={handleChange}
              value={name}
            />
            <label>Nom</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="registrationCity"
              required
              onChange={handleChange}
              value={City}
            />
            <label>Ville</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="registrationPassword"
              required
              onChange={handleChange}
              value={password}
            />
            <label>Mot de passe</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="registrationVerifPassword"
              required
              onChange={handleChange}
              value={verifPassword}
            />
            <label>Verification du mot de passe</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="registrationPseudo"
              required
              onChange={handleChange}
              value={pseudo}
            />
            <label>Pseudo</label>
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
      {successfulRegistration && <Redirect to="/connexion" />}
    </div>
  );
};

Registration.propTypes = {
  onChangeRegistration: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifPassword: PropTypes.string.isRequired,
  City: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  successfulRegistration: PropTypes.bool.isRequired,
};

// == Export
export default Registration;
