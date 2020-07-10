// == Import npm
import React from 'react';
import { useSpring, useChain, animated } from 'react-spring';

// == Import
import Cards from '../Cards';

import './registration.scss';

// == Composant
const Registration = () => (
  <div className="inscriptionPage"> <h1>Bienvenue chez les gaspi Hunters</h1>
    <div className="contain-inscription login-contain">
      <h2>S'inscrire</h2>
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
          Submit
        </button>
      </form>
    </div>
  </div>

);

// == Export
export default Registration;
