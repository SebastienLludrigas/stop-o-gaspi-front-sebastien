// == Import npm
import React from 'react';

// == Import
import './dashboard.scss';
// == Composant
const Dashboard = () => (
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
        <input type="text" name="" required="" placeholder="Vérification du Mot de Passe"/>

      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Pseudo"/>

      </div>
      <div className="user-contain">
        <input type="text" name="" required="" placeholder="Prénom"/>
      </div>
      <div className="btn_dashboard_validate">valider</div>
    </div>

    <div className="dashboard_right">
      <div className="alert_dashboard">
        <h2>ALERTE :</h2>
        <div className="alert_J">Jour J</div>
        <div className="alert_24">24h Avant</div>
        <div className="alert_48">48h Avant</div>
      </div>
      <div className="remove_account">
        <h2>Je veux supprimer mon compte :</h2>
        <div className="btn_remove_account">
          je veux recommencer à gaspiller
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Dashboard;
