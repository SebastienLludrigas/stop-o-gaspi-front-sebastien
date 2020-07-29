/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './majemail.scss';

const MajEmail = ({
  changeData,
  updateEmail,
  verifPasswordChangeData,
  toggleUpdateData,
  confirmChangeData,
  updateDataWithPassword,
  errorMessage,
}) => {
  const handleChange = (evt) => {
    changeData(evt.target.value, evt.target.name);
  };

  return (
    <div className="overlay-updateData">
      {!confirmChangeData && (
        <div className="contentUpdateDataEmail">
          {errorMessage.length > 0 && (
            <div className="errorRequest">
              {errorMessage}
            </div>
          )}
          <h4 className="">Changez votre E-mail</h4>
          <p>Veuillez entrer votre nouvel email ainsi que votre mot de passe actuel afin
            de valider le changement :
          </p>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              updateDataWithPassword('email');
            }}
          >
            <label className="labelEmail">Nouvel Email :</label>
            <input
              type="text"
              value={updateEmail}
              name="updateEmail"
              onChange={handleChange}
            />
            <label className="labelEmail">Mot de passe actuel :</label>
            <input
              type="text"
              value={verifPasswordChangeData}
              name="verifPasswordChangeData"
              onChange={handleChange}
            />
            <button
              className="submission"
              type="submit"
            >
              Soumettre
            </button>
            <button
              className="cancellation"
              type="button"
              onClick={() => {
                toggleUpdateData('email');
              }}
            >
              Annuler
            </button>
          </form>
        </div>
      )}
      {confirmChangeData && (
        <div className="confirmChangeData">
          Modification enregistrée !
        </div>
      )}
    </div>
  );
};

MajEmail.propTypes = {
  changeData: PropTypes.func.isRequired,
  updateDataWithPassword: PropTypes.func.isRequired,
  toggleUpdateData: PropTypes.func.isRequired,
  updateEmail: PropTypes.string.isRequired,
  verifPasswordChangeData: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  confirmChangeData: PropTypes.bool.isRequired,
};

export default MajEmail;
