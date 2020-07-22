// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import findOldDlc from 'src/utils';
import { SpeechBubble } from 'react-kawaii'

import './majquantity.scss';

const MajQuantity = ({
  toggleUpdateQuantity,
  currentProductId,
  currentProductQuantity,
  quantityChange,
  submitNewQuantity,
  datas,
}) => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
    quantityChange(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('test');
    submitNewQuantity();
  };

  return (
    <div className="displayUpdateQuantity_shadow-layer">
      <div className="imgDelete">
        <SpeechBubble size={320} mood="happy" color="#83D1FB" />
        <div className="displayUpdateQuantity_container">
          <i
            className="fas fa-times"
            onClick={() => {
              toggleUpdateQuantity(currentProductId);
            }}
          />
          <p>Mettre à jour la quantité</p>
          <form  onSubmit={handleSubmit}>
            <input
              className="inputQuantity"
              type="number"
              required
              onChange={handleChange}
              value={currentProductQuantity}
              // defaultValue={}
            />
            <button
              type="submit"
              className="quantityValidation"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

MajQuantity.propTypes = {
  datas: PropTypes.array.isRequired,
  toggleUpdateQuantity: PropTypes.func.isRequired,
  submitNewQuantity: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
  currentProductQuantity: PropTypes.string.isRequired,
};

export default MajQuantity;
