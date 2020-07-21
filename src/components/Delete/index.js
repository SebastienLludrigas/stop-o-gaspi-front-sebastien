// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import '../Delete/delete.scss';

const Delete = ({ deleteProduct, toggleDeleteConfirm, currentProductId }) => {
  // const handleProduct = (evt) => {
  //   // deleteProduct(evt.target.id);
  //   console.log(evt);
  // };

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
          // id={id}
          type="button"
          className="cancel"
          onClick={() => {
            toggleDeleteConfirm(currentProductId);
            // console.log(currentProductId);
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
  // id: PropTypes.number.isRequired,
  currentProductId: PropTypes.number.isRequired,
};

export default Delete;
