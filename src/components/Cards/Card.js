/* eslint-disable camelcase */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as anim } from 'react-spring';
import { colorCode, dateConverter } from 'src/utils';
import Edit3 from '@bit/feathericons.react-feather.edit-3';
import MoreHorizontal from '@bit/feathericons.react-feather.more-horizontal';
import Trash2 from '@bit/feathericons.react-feather.trash-2';
import Delete from 'src/components/Delete';
import MajDlc from 'src/components/MajDlc';
import MajQuantity from 'src/components/MajQuantity';
import logo from '../../assets/image/logoStopOGaspi.PNG';
// == Import
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
  displayUpdateQuantity,
  displayUpdateDlc,
  submitNewDlc,
  submitNewQuantity,
  currentProductId,
  currentProductDlc,
  currentProductQuantity,
  toggleUpdateDlc,
  toggleUpdateQuantity,
  dlcChange,
  quantityChange,
  datas,
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
      <div className="container-date">
        <anim.div className={flipped ? 'front' : colorCode(expiration_date, 'card')} style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
          <MoreHorizontal size="40" id="rotateCard" color="blue" onClick={() => set((state) => !state)} />
          <Trash2
            size="30"
            className="fas fa-trash-alt"
            onClick={() => {
              toggleDeleteConfirm(id);
            }}
          />
          {image !== null ? <img className="product-img" src={image} alt="votre produit" onClick={() => set((state) => !state)} /> : <img className="product-img-logo" src={logo} alt="visuel par default" onClick={() => set((state) => !state)} />}
          <p className="productTitle" onClick={() => set((state) => !state)}>{name}</p>

          <p
            className="dlc"

          >
            DLC :
            <span
              onClick={() => {
                toggleUpdateDlc(id);
              }}
            >{dateConverter(expiration_date)}
            </span>
            <Edit3
              size="20"
              id="dlcPen"
              className={colorCode(expiration_date, 'card') === 'card finish' ? '' : 'fa fa-pencil'}
              onClick={() => {
                toggleUpdateDlc(id);
              }}
              aria-hidden="true"
            />
          </p>
          {elaboration_date !== null && <p className="fab">Date de fabrication : <span>{dateConverter(elaboration_date)}</span></p>}

          {brand !== null && <p className="brand" onClick={() => set((state) => !state)}>marque : {brand}</p>}
          <p className="createDate" onClick={() => set((state) => !state)}>Date d'ajout : {dateConverter(created_at)}</p>
          {product_quantity !== null && <p className="poid" onClick={() => set((state) => !state)}>poids : {product_quantity}</p>}
          <p
            className="qut"
            onClick={() => {
              toggleUpdateQuantity(id);
            }}
          >Quantité : {quantity}
            <Edit3
              size="20"
              id="quantityPen"
              className={colorCode(expiration_date, 'card') === 'card finish' ? '' : 'fas fa-pen-square'}
              onClick={() => {
                toggleUpdateQuantity(id);
              }}
            />
          </p>
        </anim.div>

        <anim.div className={flipped ? colorCode(expiration_date, 'card') : 'back'} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }}>
          {image !== null ? <img className="product-img-back" src={image} alt="votre produit" onClick={() => set((state) => !state)} /> : <img className="product-img-logo-back" src={logo} alt="visuel par default" onClick={() => set((state) => !state)} />}
          <p className="productTitle" onClick={() => set((state) => !state)}>{name}</p>
          {nutriscore_grade !== null && <img className="nutri-img" src={nutriscoreUrl} alt="visuel par default" onClick={() => set((state) => !state)} />}
        </anim.div>
      </div>
      {displayDeleteConfirm && (
        <Delete
          deleteProduct={deleteProduct}
          currentProductId={currentProductId}
          toggleDeleteConfirm={toggleDeleteConfirm}
        />
      )}
      {displayUpdateDlc && (
        <MajDlc
          currentProductId={currentProductId}
          toggleUpdateDlc={toggleUpdateDlc}
          dlcChange={dlcChange}
          currentProductDlc={currentProductDlc}
          submitNewDlc={submitNewDlc}
          datas={datas}
        />
      )}
      {displayUpdateQuantity && (
        <MajQuantity
          currentProductId={currentProductId}
          toggleUpdateQuantity={toggleUpdateQuantity}
          quantityChange={quantityChange}
          currentProductQuantity={currentProductQuantity}
          submitNewQuantity={submitNewQuantity}
          datas={datas}
        />
      )}
    </>

  );
};

Card.propTypes = {
  datas: PropTypes.array.isRequired,
  displayDeleteConfirm: PropTypes.bool.isRequired,
  displayUpdateDlc: PropTypes.bool.isRequired,
  displayUpdateQuantity: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  submitNewDlc: PropTypes.func.isRequired,
  submitNewQuantity: PropTypes.func.isRequired,
  dlcChange: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  toggleUpdateDlc: PropTypes.func.isRequired,
  toggleUpdateQuantity: PropTypes.func.isRequired,
  name: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number.isRequired,
  currentProductId: PropTypes.number.isRequired,
  currentProductDlc: PropTypes.string.isRequired,
  currentProductQuantity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
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
