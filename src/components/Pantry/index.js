// == Import npm
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Cards from '../Cards';

import './pantry.scss';

// == Composant
const Pantry = ({
  datas,
  getAllProducts,
  displayDeleteConfirm,
  deleteProduct,
  toggleDeleteConfirm,
}) => {
  useEffect(() => {
    getAllProducts();
  }, [displayDeleteConfirm, deleteProduct, toggleDeleteConfirm]);

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
        toggleDeleteConfirm={toggleDeleteConfirm}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

Pantry.propTypes = {
  datas: PropTypes.array.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  displayDeleteConfirm: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
};

// == Export
export default Pantry;
