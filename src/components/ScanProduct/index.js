import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

// == Import

import './scanProduct.scss';

// == Composant
const ScanProduct = () => {
  const pantryText=useSpring({ marginLeft: 0, from: { marginLeft: 500 } });
  return (
    <div className="scanPage">
      <animated.div
        style={pantryText}
        config={{ delay: 2000, duration: 2000 }}
      >
        dd
        
      </animated.div>
      
    </div>
  );
}
// == Export
export default ScanProduct;
