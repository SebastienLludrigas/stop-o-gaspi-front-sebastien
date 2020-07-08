// == Import npm
import React, { useState } from 'react';

import { useSpring, animated as anim } from 'react-spring';
// == Import
import emptyVisual from 'src/assets/image/food.png';
import './cards.scss';

// == Composant
const Card = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className="card-container" onClick={() => set((state) => !state)}>
      <anim.div className={flipped ? 'front' : 'card'} style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <img src={emptyVisual} alt="visuel par default" />
        <p className="productTitle"> lait</p>
        <p>DLC : <span className="dlc">01 fevrier 2050</span></p>
        <p>marque : polux</p>
        <p>Date d'ajout : 01 novembre 1901</p>
        <p>quantité : 2000</p>
      </anim.div>

      <anim.div className={flipped ? 'card' : 'back'} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
        <img src={emptyVisual} alt="visuel par default" />
        <p className="productTitle"> lait</p>
        <p>NTRISCORE a b C d e</p>
      </anim.div>
    </div>

  );
};
// == Export
export default Card;
