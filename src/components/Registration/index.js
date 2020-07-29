/* eslint-disable jsx-a11y/label-has-associated-control */
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
  errorMessage,
}) => {
  const [equality, setEquality] = useState(true);
  const [numberCharacters, setNumberCharacters] = useState(true);
  const [equalitySubmission, setEqualitySubmission] = useState(true);
  const [charactersSubmission, setCharactersSubmission] = useState(true);

  const errorPasswords = 'Les mots de passe ne sont pas identiques !';
  const errorNumberCharacters = 'Votre mot de passe doit contenir 8 caractères au minimum !';
  const errorEqualitySubmit = 'Les mots de passe doivent être identiques pour l\'envoi du formulaire !';
  const errorNbCharactersSubmit = 'Les mots de passe doivent contenir 8 caractères au minimum pour l\'envoi du formulaire !';

  const handleSubmitLoggin = (evt) => {
    evt.preventDefault();
    if (equality && numberCharacters) {
      setEqualitySubmission(true);
      setCharactersSubmission(true);
      handleRegistration();
    }
    else if (equality && !numberCharacters) {
      setEqualitySubmission(true);
      setCharactersSubmission(false);
    }
    else if (!equality && numberCharacters) {
      setEqualitySubmission(false);
      setCharactersSubmission(true);
    }
    else {
      setEqualitySubmission(false);
      setCharactersSubmission(false);
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

  const numberCharactersCheck = () => {
    if (password.length < 8 || verifPassword.length < 8) {
      setNumberCharacters(false);
    }
    else {
      setNumberCharacters(true);
    }
  };

  return (
    <div className="inscriptionPage">
      {errorMessage.length > 0 && (
        <div className="errorMessages">
          {errorMessage}
        </div>
      )}
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
              type="password"
              minLength="8"
              name="registrationPassword"
              required
              onChange={handleChange}
              onBlur={() => {
                if (verifPassword.length > 0) {
                  equalityCheck();
                }
                numberCharactersCheck();
              }}
              value={password}
            />
            <label>Mot de passe (Minimun 8 caractéres)</label>
          </div>

          <div className="user-contain">
            <input
              type="password"
              name="registrationVerifPassword"

              onChange={handleChange}
              onBlur={() => {
                equalityCheck();
                numberCharactersCheck();
              }}
              value={verifPassword}
            />
            <label>Verification du mot de passe</label>
            {!equality && <div className="errorPasswords">{errorPasswords}</div>}
            {!numberCharacters && <div className="errorNumberCharacters">{errorNumberCharacters}</div>}
          </div>

          <div className="user-contain">
            <input
              type="text"
              name="registrationPseudo"

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
        {!equalitySubmission && <div className="errorSubmit">{errorEqualitySubmit}</div>}
        {!charactersSubmission && <div className="errorSubmit">{errorNbCharactersSubmit}</div>}
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
  errorMessage: PropTypes.string.isRequired,
  successfulRegistration: PropTypes.bool.isRequired,
};

// == Export
export default Registration;
