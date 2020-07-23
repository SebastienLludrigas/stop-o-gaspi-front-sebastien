// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import { SpeechBubble } from 'react-kawaii'
import './delete.scss';

const Delete = ({ deleteProduct, toggleDeleteConfirm, currentProductId }) => {
  

  return (
    <div className="deleteConfirm_shadow-layer">
      <div className="imgDelete">
        <SpeechBubble size={320} mood="ko" color="#83D1FB"/>
        <div className="deleteConfirm_container">
          <p>Supprimer ce produit ?</p>
          <div className="btns_Delete">
            <button
              type="button"
              className="validate"
              onClick={() => {
                deleteProduct(currentProductId);
              }}
            >
              OUI
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                toggleDeleteConfirm(currentProductId);
              }}
            >
              NON
            </button>
          </div>
        </div>

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
