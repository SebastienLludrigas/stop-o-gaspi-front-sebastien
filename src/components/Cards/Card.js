/* eslint-disable camelcase */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as anim } from 'react-spring';
import { colorCode } from 'src/utils';

// == Import
// import emptyVisual from 'src/assets/image/food.png';
import './cards.scss';

// == Composant
const Card = ({
  image,
  name,
  // ingredients,
  quantity,
  expiration_date,
  nutriscore_grade,
  product_quantity,
  brand,
}) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // Variable qui permet d'afficher l'image du nutriscore en fonction du nutriscore_grade
  const nutriscoreUrl = `https://static.openfoodfacts.org/images/misc/nutriscore-${nutriscore_grade}.svg`;

  // On convertit la date au format ISO en date lisible par l'utilisateur
  const date = new Date(expiration_date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="container-date" onClick={() => set((state) => !state)}>
      <anim.div className={flipped ? 'front' : colorCode(expiration_date, 'card')} style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <img className="product-img" src={image} alt="visuel par default" />
        <p className="productTitle">{name}</p>
        <p>DLC : <span className="dlc">{date.toLocaleString('fr-FR', options)}</span></p>
        <p>marque : {brand}</p>
        <p>Date d'ajout : 01 novembre 1901</p>
        <p>poids : {product_quantity} g</p>
        <p className="dlc">quantité : {quantity}</p>
      </anim.div>

      <anim.div className={flipped ? colorCode(expiration_date, 'card') : 'back'} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
        <img className="product-img" src={image} alt="visuel par default" />
        <p className="productTitle">{name}</p>
        <img className="nutri-img" src={nutriscoreUrl} alt="visuel par default" />
      </anim.div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  // ingredients: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  product_quantity: PropTypes.any,
  nutriscore_grade: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  expiration_date: PropTypes.number.isRequired,
};

Card.defaultProps = {
  product_quantity: '',
};

// == Export
export default Card;
