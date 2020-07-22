// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import findOldDlc from 'src/utils';
import { SpeechBubble } from 'react-kawaii'

import './majdlc.scss';

const MajDlc = ({
  toggleUpdateDlc,
  currentProductId,
  currentProductDlc,
  dlcChange,
  submitNewDlc,
  datas,
}) => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
    dlcChange(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('test');
    submitNewDlc();
  };

  return (
    <div className="displayUpdateDlc_shadow-layer">
      <div className="imgDelete">
        <SpeechBubble size={320} mood="excited" color="#83D1FB"/>

        <div className="displayUpdateDlc_container">
          <i
            className="fas fa-times"
            onClick={() => {
              toggleUpdateDlc(currentProductId);
            }}
          />
          <p>Mettre à jour la date limite de consommation</p>
          <form className="formDlcModal" onSubmit={handleSubmit}>
            <input
              className="inputDlc"
              type="date"
              required
              onChange={handleChange}
              value={currentProductDlc}
              // defaultValue={}
            />
            <button
              type="submit"
              className="dateValidation"
            >
              OK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

MajDlc.propTypes = {
  datas: PropTypes.array.isRequired,
  toggleUpdateDlc: PropTypes.func.isRequired,
  submitNewDlc: PropTypes.func.isRequired,
  dlcChange: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
  currentProductDlc: PropTypes.string.isRequired,
};

export default MajDlc;
