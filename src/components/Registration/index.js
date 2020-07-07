// == Import npm
import React from 'react';
import { useSpring, useChain, animated } from 'react-spring';

// == Import
import Cards from '../Cards';

import './registration.scss';

// == Composant
const Registration = () => (
  <>
    <div className="login-contain">
      <h2>Register</h2>
      <form>
        <div className="user-contain">
          <input type="text" name="" required=""/>
          <label>e-mail</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required=""/>
          <label> Verif Password</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required=""/>
          <label>Pseudo</label>
        </div>
        <div className="user-contain">
          <input type="password" name="" required=""/>
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
  </>
);

// == Export
export default Registration;
