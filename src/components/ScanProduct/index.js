import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

// == Import

import './scanProduct.scss';

// == Composant
const ScanProduct = () => {
  const scanText=useSpring({ marginLeft: 0, from: { marginLeft: 500 } });
  return (
    <div className="scanPage">
      <animated.div
        style={scanText}
        config={{ delay: 2000, duration: 2000 }}
      >
        <div className="right_scanPage">

          <div className="scanInput">
            <h2>je scanne mon code barre :</h2>
            <div className="btn_scan_direct">+</div>
          </div>

          <div className="manualInput">
            <h2>je saisie mon code barre :</h2>
            <input type="text" name="" required="" />
            <div className="btn_validate_barcode">Valider</div>
          </div>
          
        </div>
      </animated.div>

    </div>
  );
}
// == Export
export default ScanProduct;
