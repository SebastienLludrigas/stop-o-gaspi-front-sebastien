// == Import npm
import React from 'react';
import { useSpring, useChain, animated } from 'react-spring';
import { Link } from 'react-router-dom';

// == Import
import Cards from '../Cards';

import './pantry.scss';

// == Composant
const Pantry = () => {
  const pantryText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });
  return (
    <div className="pantry">
      <animated.div
        style={pantryText}
        config={{ delay: 2000, duration: 2000 }}
      >
        <h1 className="pantryTitle">MON PANTRY</h1>
        <h2 className="label_pantry">Ajouter un nouveau produit</h2>
        <div className="pantry_buttons">
          <Link exact to="/product">
            <div className="btn_manual btn">Je saisie mon produit</div>
          </Link>
          <div className="btn_scan btn">Je scanne mon produit</div>
        </div>
      </animated.div>
      <Cards />
    </div>
  );
};
// == Export
export default Pantry;
