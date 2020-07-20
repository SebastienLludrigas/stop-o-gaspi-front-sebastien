// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import '../Delete/delete.scss';

const Delete = ({ deleteProduct, toggleDeleteConfirm }) => (
  <div className="deleteConfirm_shadow-layer">
    <div className="deleteConfirm_container">
      <p>Supprimer ce produit</p>
      <button
        type="button"
        className="modalButton validate"
        onClick={deleteProduct}
      >
        Ok
      </button>
      <button
        type="button"
        className="modalButton cancel"
        onClick={toggleDeleteConfirm}
      >
        Annuler
      </button>
    </div>
  </div>
);

Delete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
};

export default Delete;
