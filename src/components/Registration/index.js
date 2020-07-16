// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './registration.scss';

// == Composant
const Registration = () => (
  <div className="inscriptionPage">
    <div className="contain-inscription login-contain">
      <h2>S'inscrire
        <Link to="/connexion">
          <h3>( vous avez déja un compte ? )</h3>
        </Link>
      </h2>
      <form>
        <div className="user-contain">
          <input type="text" name="" required="" />
          <label>e-mail</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required="" />
          <label> Verif Password</label>
        </div>
        <div className="user-contain">
          <input type="text" name="" required="" />
          <label>Pseudo</label>
        </div>
        <div className="user-contain">
          <input type="text" name="" required="" />
          <label>First Name</label>
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

// == Export
export default Registration;
