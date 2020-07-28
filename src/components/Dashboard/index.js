// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import
import MajEmail from 'src/components/MajEmail';
import MajPassword from 'src/components/MajPassword';

import './dashboard.scss';

// == Composant
const Dashboard = ({
  alertChange,
  isLogged,
  alertDayValue,
  displayTempModal,
  toggleConfirmDeleteAccount,
  displayConfirmDeleteAccount,
  deletionRequest,
  finalConfirmation,
  redirectToHome,
  updateEmail,
  updateName,
  updateCity,
  updatePseudo,
  toggleUpdateData,
  showUpdateData,
  dataToUpdate,
  changeData,
  verifPasswordChangeData,
  newPassword,
  newVerifPassword,
  updateData,
  confirmChangeData,
  updateDataWithPassword,
  errorMessage,
}) => {
  const handleChange = (evt) => {
    // console.log(evt.target.name);
    changeData(evt.target.value, evt.target.name);
  };

  return (
    <div className="dashboard_page">

      <div className="dashboard_left">
        <h2>Mettre à jour mes données personnelles :</h2>

        <div className="user-contain">
          <h3 className="data-name">Nom :</h3>
          <p>{updateName}</p>
          <button
            className="updateButton"
            type="button"
            onClick={() => {
              toggleUpdateData('name');
            }}
          >
            Modifier
          </button>
        </div>

        <div className="user-contain">
          <h3 className="data-name">E-mail :</h3>
          <p>{updateEmail}</p>
          <button
            className="updateButton"
            type="button"
            onClick={() => {
              toggleUpdateData('email');
            }}
          >
            Modifier
          </button>
        </div>

        <div className="user-contain">
          <h3 className="data-name">Mot de passe :</h3>
          <p>********</p>
          <button
            className="updateButton"
            type="button"
            onClick={() => {
              toggleUpdateData('password');
            }}
          >
            Modifier
          </button>
        </div>

        <div className="user-contain">
          <h3 className="data-name">Pseudo :</h3>
          <p>{updatePseudo}</p>
          <button
            className="updateButton"
            type="button"
            onClick={() => {
              toggleUpdateData('pseudo');
            }}
          >
            Modifier
          </button>
        </div>

        <div className="user-contain">
          <h3 className="data-name">City :</h3>
          <p>{updateCity}</p>
          <button
            className="updateButton"
            type="button"
            onClick={() => {
              toggleUpdateData('city');
            }}
          >
            Modifier
          </button>
        </div>
      </div>

      <div className="dashboard_right">
        <div className="alert_dashboard">
          <h2>ALERTE MAIL :</h2>
          <div
            className={alertDayValue === 0 ? 'alert_J ok' : 'alert_J'}
            onClick={() => {
              alertChange(0);
            }}
          >
            Jour J
          </div>
          <div
            className={alertDayValue === 1 ? 'alert_24 ok' : 'alert_24'}
            onClick={() => {
              alertChange(1);
            }}
          >
            24h Avant
          </div>
          <div
            className={alertDayValue === 2 ? 'alert_48 ok' : 'alert_48'}
            onClick={() => {
              alertChange(2);
            }}
          >
            48h Avant
          </div>
        </div>
        <div className={displayTempModal ? 'modalInfo' : 'modalInfo hide'}>
          Modification enregistré !
        </div>
        <div className="remove_account">
          <h2>Je veux supprimer mon compte :</h2>
          <div
            className="btn_remove_account"
            onClick={toggleConfirmDeleteAccount}
          >
            je veux recommencer à gaspiller
          </div>
        </div>
      </div>
      {!isLogged && <Redirect to="/connexion" />}
      {displayConfirmDeleteAccount && (
        <div className="deleteAccount_overlay">
          {!finalConfirmation && (
            <div className="deleteAccount_content">
              <p>Etes-vous sûr de vouloir recommencer<br />
                à polluer la planète ?
              </p>
              <button
                type="button"
                className="validate_delete"
                onClick={deletionRequest}
              >
                Oui j'en suis sûr !
              </button>
              <button
                type="button"
                className="cancel_delete"
                onClick={toggleConfirmDeleteAccount}
              >
                Non t'es pas fou ?!<br />
              </button>
            </div>
          )}
          {finalConfirmation && (
            <div className="confirmChangeData">
              Votre compte a bien été supprimé !
            </div>
          )}
        </div>
      )}
      {(showUpdateData && dataToUpdate === 'name') && (
        <div className="overlay-updateData">
          {!confirmChangeData && (
            <div className="contentUpdateData">
              <h4>Changez votre nom</h4>
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  updateData('name');
                }}
              >
                <input
                  type="text"
                  value={updateName}
                  name="updateName"
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
                    toggleUpdateData('name');
                  }}
                >
                  Annuler
                </button>
              </form>
            </div>
          )}
          {confirmChangeData && (
            <div className="confirmChangeData">
              Modification enregistré !
            </div>
          )}
        </div>
      )}
      {(showUpdateData && dataToUpdate === 'pseudo') && (
        <div className="overlay-updateData">
          {!confirmChangeData && (
            <div className="contentUpdateData">
              <h4>Changez votre pseudo</h4>
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  updateData('pseudo');
                }}
              >
                <input
                  type="text"
                  value={updatePseudo}
                  name="updatePseudo"
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
                    toggleUpdateData('pseudo');
                  }}
                >
                  Annuler
                </button>
              </form>
            </div>
          )}
          {confirmChangeData && (
            <div className="confirmChangeData">
              Modification enregistré !
            </div>
          )}
        </div>
      )}
      {(showUpdateData && dataToUpdate === 'city') && (
        <div className="overlay-updateData">
          {!confirmChangeData && (
            <div className="contentUpdateData">
              <h4>Changez votre ville</h4>
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  updateData('city');
                }}
              >
                <input
                  type="text"
                  value={updateCity}
                  name="updateCity"
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
                    toggleUpdateData('pseudo');
                  }}
                >
                  Annuler
                </button>
              </form>
            </div>
          )}
          {confirmChangeData && (
            <div className="confirmChangeData">
              Modification enregistré !
            </div>
          )}
        </div>
      )}
      {(showUpdateData && dataToUpdate === 'email') && (
        <MajEmail
          changeData={changeData}
          toggleUpdateData={toggleUpdateData}
          updateEmail={updateEmail}
          verifPasswordChangeData={verifPasswordChangeData}
          confirmChangeData={confirmChangeData}
          updateDataWithPassword={updateDataWithPassword}
          errorMessage={errorMessage}
        />
      )}
      {(showUpdateData && dataToUpdate === 'password') && (
        <MajPassword
          changeData={changeData}
          toggleUpdateData={toggleUpdateData}
          newPassword={newPassword}
          newVerifPassword={newVerifPassword}
          verifPasswordChangeData={verifPasswordChangeData}
          confirmChangeData={confirmChangeData}
          updateDataWithPassword={updateDataWithPassword}
          errorMessage={errorMessage}
        />
      )}
      {redirectToHome && <Redirect to="/" />}
    </div>

  );
};

Dashboard.propTypes = {
  alertChange: PropTypes.func.isRequired,
  updateDataWithPassword: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  deletionRequest: PropTypes.func.isRequired,
  toggleConfirmDeleteAccount: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  displayTempModal: PropTypes.bool.isRequired,
  alertDayValue: PropTypes.number.isRequired,
  displayConfirmDeleteAccount: PropTypes.bool.isRequired,
  finalConfirmation: PropTypes.bool.isRequired,
  redirectToHome: PropTypes.bool.isRequired,
  updateEmail: PropTypes.string.isRequired,
  updateName: PropTypes.string.isRequired,
  updateCity: PropTypes.string.isRequired,
  updatePseudo: PropTypes.string.isRequired,
  toggleUpdateData: PropTypes.func.isRequired,
  changeData: PropTypes.func.isRequired,
  showUpdateData: PropTypes.bool.isRequired,
  confirmChangeData: PropTypes.bool.isRequired,
  dataToUpdate: PropTypes.string.isRequired,
  verifPasswordChangeData: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newVerifPassword: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

// == Export
export default Dashboard;
