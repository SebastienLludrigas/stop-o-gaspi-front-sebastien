/* eslint-disable camelcase */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as anim } from 'react-spring';
import { colorCode, dateConverter } from 'src/utils';

import Delete from 'src/components/Delete';

// == Import
// import emptyVisual from 'src/assets/image/food.png';
import './cards.scss';

// == Composant
const Card = ({
  id,
  image,
  name,
  // ingredients,
  quantity,
  expiration_date,
  nutriscore_grade,
  product_quantity,
  brand,
  elaboration_date,
  created_at,
  toggleDeleteConfirm,
  deleteProduct,
  displayDeleteConfirm,
  currentProductId,
}) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // Variable qui permet d'afficher l'image du nutriscore en fonction du nutriscore_grade
  const nutriscoreUrl = `https://static.openfoodfacts.org/images/misc/nutriscore-${nutriscore_grade}.svg`;

  return (
    <>
      <div className="container-date" onClick={() => set((state) => !state)}>
        <anim.div className={flipped ? 'front' : colorCode(expiration_date, 'card')} style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
          <i
            className="fas fa-trash-alt"
            onClick={() => {
              toggleDeleteConfirm(id);
            }}
          />
          {image !== null && <img className="product-img" src={image} alt="visuel par default" />}
          <p className="productTitle">{name}</p>
          <p className="dlc">DLC : <span>{dateConverter(expiration_date)}</span></p>
          {elaboration_date !== null && <p className="dlc">Date de fabrication : <span>{dateConverter(elaboration_date)}</span></p>}
          {brand !== null && <p className="brand">marque : {brand}</p>}
          <p className="createDate">Date d'ajout : {dateConverter(created_at)}</p>
          {product_quantity !== null && <p className="poid">poids : {product_quantity}</p>}
          <p className="qut">quantité : {quantity}</p>
        </anim.div>

        <anim.div className={flipped ? colorCode(expiration_date, 'card') : 'back'} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
          {image !== null && <img className="product-img" src={image} alt="visuel par default" />}
          <p className="productTitle">{name}</p>
          {nutriscore_grade !== null && <img className="nutri-img" src={nutriscoreUrl} alt="visuel par default" />}
        </anim.div>
      </div>
      {displayDeleteConfirm && (
        <Delete
          displayDeleteConfirm={displayDeleteConfirm}
          deleteProduct={deleteProduct}
          currentProductId={currentProductId}
          toggleDeleteConfirm={toggleDeleteConfirm}
        />
      )}
    </>
  );
};

Card.propTypes = {
  displayDeleteConfirm: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  name: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number.isRequired,
  currentProductId: PropTypes.number.isRequired,
  product_quantity: PropTypes.any,
  nutriscore_grade: PropTypes.string,
  image: PropTypes.string,
  expiration_date: PropTypes.string.isRequired,
  elaboration_date: PropTypes.string,
  created_at: PropTypes.string,
};

Card.defaultProps = {
  product_quantity: '',
  nutriscore_grade: '',
  name: '',
  brand: '',
  quantity: 1,
  image: '',
  elaboration_date: '',
  created_at: '',
};

// == Export
export default Card;
