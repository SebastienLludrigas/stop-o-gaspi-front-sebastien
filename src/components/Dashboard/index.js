// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import
import './dashboard.scss';
// == Composant
const Dashboard = ({
  alertChange,
  isLogged,
  alertDayValue,
  displayTempModal,
}) => (
  <div className="dashboard_page">
    <div className="dashboard_left">
      <h2>Mettre à jour mes données personnelles :</h2>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="e-mail" />
      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Mot de Passe" />

      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Vérification du Mot de Passe" />

      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Pseudo" />

      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Prénom" />
      </div>
      <div className="btn_dashboard_validate">valider</div>
    </div>

    <div className="dashboard_right">
      <div className="alert_dashboard">
        <h2>ALERTE :</h2>
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
        <div className="btn_remove_account">
          je veux recommencer à gaspiller
        </div>
      </div>
    </div>
    {!isLogged && <Redirect to="/connexion" />}
  </div>
);

Dashboard.propTypes = {
  alertChange: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  displayTempModal: PropTypes.bool.isRequired,
  alertDayValue: PropTypes.number.isRequired,
};

// == Export
export default Dashboard;
