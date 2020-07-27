// == Import npm
import React, { useState } from 'react';
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
  const [equality, setEquality] = useState(true);
  const [allowSubmission, setAllowSubmission] = useState(true);

  const errorPasswords = 'Les mots de passe ne sont pas identiques !';
  const errorSubmit = 'Les mots de passe doivent être identiques pour l\'envoi du formulaire !';

  const handleSubmitLoggin = (evt) => {
    evt.preventDefault();
    if (equality) {
      setAllowSubmission(true);
      handleRegistration();
    }
    else {
      setAllowSubmission(false);
    }
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name);
    onChangeRegistration(evt.target.value, evt.target.name);
  };

  const equalityCheck = () => {
    if (password !== verifPassword) {
      setEquality(false);
    }
    else {
      setEquality(true);
    }
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
              onBlur={() => {
                if (!equality) {
                  equalityCheck();
                }
              }}
              value={password}
            />
            <label>Mot de passe</label>
          </div>
          <div className="user-contain">
            <input
              type="password"
              name="registrationVerifPassword"
              required
              onChange={handleChange}
              onBlur={equalityCheck}
              value={verifPassword}
            />
            <label>Verification du mot de passe</label>
            {!equality && <div className="errorPasswords">{errorPasswords}</div>}
          </div>
          <div className="user-contain">
            <input
              type="password"
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
        {!allowSubmission && <div className="errorSubmit">{errorSubmit}</div>}
      </div>
      {successfulRegistration && <Redirect to="/pantry" />}
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
