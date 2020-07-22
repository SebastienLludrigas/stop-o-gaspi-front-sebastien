// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './delete.scss';

const Delete = ({ deleteProduct, toggleDeleteConfirm, currentProductId }) => {
  

  return (
    <div className="deleteConfirm_shadow-layer">
      <div className="deleteConfirm_container">
        <p>Supprimer ce produit</p>
        <button
          type="button"
          className="validate"
          onClick={() => {
            deleteProduct(currentProductId);
          }}
        >
          Ok
        </button>
        <button
          type="button"
          className="cancel"
          onClick={() => {
            toggleDeleteConfirm(currentProductId);
          }}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

Delete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
};

export default Delete;
