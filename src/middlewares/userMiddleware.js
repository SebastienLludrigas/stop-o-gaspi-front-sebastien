import axios from 'axios';

import {
  LOG_IN,
  saveUser,
  ALERT_CHANGE,
  HANDLE_REGISTRATION,
  automaticConnection,
  logIn,
  changeAlertDay,
  closeModal,
  fetchUserInfos,
  FETCH_USER_INFOS,
  DELETION_REQUEST,
  deleteAccount,
  closeFinalConfirmation,
  catchError,
} from '../actions/user';
import { getAllProducts } from '../actions/product';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().user;
      console.log(`l'email est :${username} et le password est : ${password}`);

      axios.post('https://stopgogaspiback.co/api/login_check', {
        username,
        password,
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem('token', response.data.token);
          store.dispatch(saveUser(response.data));
          store.dispatch(getAllProducts());
          store.dispatch(fetchUserInfos());
        })
        .catch((error) => {
          console.warn(error.response.status);
          if (error.response.status === 404) {
            store.dispatch(catchError('La connexion a échoué, veuillez réessayer.'));
          }
          else if (error.response.status === 401) {
            store.dispatch(catchError('Identifiants invalides, veuillez réessayer.'));
          }
        });

      next(action);
      break;
    }

    case FETCH_USER_INFOS: {
      const token = localStorage.getItem('token');

      axios.get('https://stopgogaspiback.co/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case ALERT_CHANGE: {
      const token = localStorage.getItem('token');
      const alertLevel = action.value;

      axios.post(`https://stopgogaspiback.co/api/user/edit/alertday/${alertLevel}`, {
        alertLevel,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // console.log(response.data);
          console.log(response.data);
          store.dispatch(changeAlertDay(response.data.alert_day));
          setTimeout(() => {
            store.dispatch(closeModal());
          }, 2000);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case HANDLE_REGISTRATION: {
      const {
        registrationEmail,
        registrationName,
        registrationCity,
        registrationPassword,
        registrationVerifPassword,
        registrationPseudo,
      } = store.getState().user;
      // console.log(`l'email est :${username} et le password est : ${password}`);

      axios.post('https://stopgogaspiback.co/api/login/signon', {
        email: registrationEmail,
        name: registrationName,
        City: registrationCity,
        password: registrationPassword,
        verifPassword: registrationVerifPassword,
        pseudo: registrationPseudo,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(automaticConnection());
          store.dispatch(logIn());
        })
        .catch((error) => {
          console.warn(error.response.status);
          if (error.response.status === 404) {
            store.dispatch(catchError('L\'inscription a échoué, veuillez réessayer.'));
          }
          else if (error.response.status === 403) {
            store.dispatch(catchError('Cette adresse email a déjà un compte, veuillez réessayer ou vous connecter.'));
          }
        });

      next(action);
      break;
    }

    case DELETION_REQUEST: {
      const token = localStorage.getItem('token');

      axios.delete('https://stopgogaspiback.co/api/user/delete', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(deleteAccount());
          setTimeout(() => {
            store.dispatch(closeFinalConfirmation());
          }, 2500);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
