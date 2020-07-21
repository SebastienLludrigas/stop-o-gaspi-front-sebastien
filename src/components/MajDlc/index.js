// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import '../Delete/delete.scss';

const MajDlc = ({
  toggleUpdateDlc,
  currentProductId,
  dlcChange,
}) => {
  const handleChange = (evt) => {
    dlcChange(evt.target.value);
  };

  return (
    <div className="deleteConfirm_shadow-layer">
      <div className="deleteConfirm_container">
        <p>Mettre à jour la date limite de consommation</p>
        <form>
          <input
            type="date"
            required
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

MajDlc.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  dlcChange: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
};

export default MajDlc;
