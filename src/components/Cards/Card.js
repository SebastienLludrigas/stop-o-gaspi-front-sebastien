/* eslint-disable camelcase */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as anim } from 'react-spring';
// == Import
// import emptyVisual from 'src/assets/image/food.png';
import './cards.scss';

// == Composant
const Card = ({
  image_front_thumb_url,
  product_name_fr,
  nutriscore_grade,
  product_quantity,
  brands,
}) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="card-container" onClick={() => set((state) => !state)}>
      <anim.div className={flipped ? 'front' : 'card'} style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <img className="product-img" src={image_front_thumb_url} alt="visuel par default" />
        <p className="productTitle">{product_name_fr}</p>
        <p>DLC : <span className="dlc">01 fevrier 2050</span></p>
        <p>marque : {brands}</p>
        <p>Date d'ajout : 01 novembre 1901</p>
        <p>quantité : {product_quantity}</p>
      </anim.div>

      <anim.div className={flipped ? 'card' : 'back'} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
        <img className="product-img" src={image_front_thumb_url} alt="visuel par default" />
        <p className="productTitle">{product_name_fr}</p>
        <img className="nutri-img" src={nutriscore_grade} alt="visuel par default" />
      </anim.div>
    </div>
  );
};

Card.propTypes = {
  product_name_fr: PropTypes.string.isRequired,
  brands: PropTypes.string.isRequired,
  product_quantity: PropTypes.any.isRequired,
  nutriscore_grade: PropTypes.string.isRequired,
  image_front_thumb_url: PropTypes.string.isRequired,
};

// == Export
export default Card;
