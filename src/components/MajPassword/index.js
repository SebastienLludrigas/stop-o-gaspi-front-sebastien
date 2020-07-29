/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './majpassword.scss';

const MajPassword = ({
  changeData,
  verifPasswordChangeData,
  toggleUpdateData,
  newPassword,
  newVerifPassword,
  updateDataWithPassword,
  confirmChangeData,
  errorMessage,
}) => {
  const handleChange = (evt) => {
    changeData(evt.target.value, evt.target.name);
  };

  return (
    <div className="overlay-updateData">
      {!confirmChangeData && (
        <div className="contentUpdateDataPassword">
          {errorMessage.length > 0 && (
          <div className="errorRequest">
            {errorMessage}
          </div>
          )}
          <h4 className="">Modifiez le mot de passe</h4>
          <p>Veuillez entrer votre mot de passe actuel puis votre nouveau
            mot de passe et une seconde fois votre nouveau mot de passe.
          </p>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              updateDataWithPassword('password');
            }}
          >
            <label className="labelPassword">Mot de passe actuel :</label>
            <input
              type="text"
              value={verifPasswordChangeData}
              name="verifPasswordChangeData"
              onChange={handleChange}
            />
            <label className="labelPassword">Nouveau mot de passe :</label>
            <input
              type="text"
              value={newPassword}
              name="newPassword"
              onChange={handleChange}
            />
            <label className="labelPassword">Saisissez une seconde fois le nouveau mot de passe :</label>
            <input
              type="text"
              value={newVerifPassword}
              name="newVerifPassword"
              onChange={handleChange}
            />
            <button
              className="submissionPassword"
              type="submit"
            >
              Soumettre
            </button>
            <button
              className="cancellationPassword"
              type="button"
              onClick={() => {
                toggleUpdateData('password');
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

MajPassword.propTypes = {
  changeData: PropTypes.func.isRequired,
  toggleUpdateData: PropTypes.func.isRequired,
  verifPasswordChangeData: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newVerifPassword: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  updateDataWithPassword: PropTypes.func.isRequired,
  confirmChangeData: PropTypes.bool.isRequired,
};

export default MajPassword;
