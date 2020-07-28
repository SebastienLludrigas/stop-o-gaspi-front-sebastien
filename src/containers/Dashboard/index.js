import { connect } from 'react-redux';

// === on importe le composant de présentation
import Dashboard from 'src/components/Dashboard';

import {
  alertChange,
  toggleConfirmDeleteAccount,
  deletionRequest,
  toggleUpdateData,
} from 'src/actions/user';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  isLogged: state.user.isLogged,
  alertDayValue: state.user.alertDayValue,
  displayTempModal: state.user.displayTempModal,
  displayConfirmDeleteAccount: state.user.displayConfirmDeleteAccount,
  finalConfirmation: state.user.finalConfirmation,
  redirectToHome: state.user.redirectToHome,
  updateEmail: state.user.updateEmail,
  updateName: state.user.updateName,
  updateCity: state.user.updateCity,
  updatePseudo: state.user.updatePseudo,
  dataToUpdate: state.user.dataToUpdate,
  showUpdateData: state.user.showUpdateData,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  alertChange: (value) => {
    dispatch(alertChange(value));
  },
  toggleConfirmDeleteAccount: () => {
    dispatch(toggleConfirmDeleteAccount());
  },
  deletionRequest: () => {
    dispatch(deletionRequest());
  },
  toggleUpdateData: (target) => {
    dispatch(toggleUpdateData(target));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
