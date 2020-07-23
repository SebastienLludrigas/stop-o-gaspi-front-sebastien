// == Import npm
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Cards from '../Cards';

import './pantry.scss';

// == Composant
const Pantry = ({
  isLogged,
  datas,
  currentProductId,
  currentProductDlc,
  currentProductQuantity,
  displayDeleteConfirm,
  displayUpdateQuantity,
  displayUpdateDlc,
  deleteProduct,
  toggleDeleteConfirm,
  toggleUpdateDlc,
  toggleUpdateQuantity,
  dlcChange,
  quantityChange,
  submitNewDlc,
  submitNewQuantity,
}) => {
  const pantryText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });
  return (
    <div className="pantry">
      <animated.div
        style={pantryText}
        config={{ delay: 100, duration: 2000 }}
      >
        <h1 className="pantryTitle">MON PANTRY</h1>
        <h2 className="label_pantry">Ajouter un nouveau produit</h2>
        <div className="pantry_buttons">
          <Link to="/product">
            <div className="btn_manual btn">Je saisie mon produit</div>
          </Link>
          <Link to="/scan-product">
            <div className="btn_scan btn">Je scanne mon produit</div>
          </Link>
        </div>
      </animated.div>
      <Cards
        datas={datas}
        displayDeleteConfirm={displayDeleteConfirm}
        displayUpdateDlc={displayUpdateDlc}
        displayUpdateQuantity={displayUpdateQuantity}
        toggleDeleteConfirm={toggleDeleteConfirm}
        toggleUpdateDlc={toggleUpdateDlc}
        toggleUpdateQuantity={toggleUpdateQuantity}
        deleteProduct={deleteProduct}
        currentProductId={currentProductId}
        currentProductDlc={currentProductDlc}
        currentProductQuantity={currentProductQuantity}
        dlcChange={dlcChange}
        quantityChange={quantityChange}
        submitNewDlc={submitNewDlc}
        submitNewQuantity={submitNewQuantity}
      />
      {!isLogged && <Redirect to="/connexion" />}
    </div>
  );
};

Pantry.propTypes = {
  datas: PropTypes.array.isRequired,
  currentProductId: PropTypes.number.isRequired,
  currentProductDlc: PropTypes.string.isRequired,
  currentProductQuantity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  submitNewDlc: PropTypes.func.isRequired,
  submitNewQuantity: PropTypes.func.isRequired,
  displayDeleteConfirm: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  displayUpdateQuantity: PropTypes.bool.isRequired,
  displayUpdateDlc: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  dlcChange: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  toggleUpdateDlc: PropTypes.func.isRequired,
  toggleUpdateQuantity: PropTypes.func.isRequired,
};

// == Export
export default Pantry;
