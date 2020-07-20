// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './registration.scss';

// == Composant
const Registration = ({
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
              name="email"
              required
              onChange={handleChange}
              value={email}
            />
            <label>e-mail</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={name}
            />
            <label>Name</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="City"
              required
              onChange={handleChange}
              value={City}
            />
            <label>City</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="password"
              required
              onChange={handleChange}
              value={password}
            />
            <label>Password</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="verifPassword"
              required
              onChange={handleChange}
              value={verifPassword}
            />
            <label>Verif Password</label>
          </div>
          <div className="user-contain">
            <input
              type="text"
              name="pseudo"
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
};

// == Export
export default Registration;
