/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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
  UPDATE_DATA,
  showConfirmChangeData,
  UPDATE_DATA_WITH_PASSWORD,
} from '../actions/user';
import { getAllProducts } from '../actions/product';

const laurieAPI = 'https://stopogaspiback.lauriereinette.fr/api';
const localAPI = 'https://localhost:8000/api';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().user;
      console.log(`l'email est :${username} et le password est : ${password}`);

      axios.post(`${localAPI}/login_check`, {
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

      axios.get(`${localAPI}/user`, {
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

      axios.post(`${localAPI}/user/edit/alertday/${alertLevel}`, {
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

      axios.post(`${localAPI}/login/signon`, {
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

      axios.delete(`${localAPI}/user/delete`, {
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

    case UPDATE_DATA: {
      const token = localStorage.getItem('token');
      const targetData = action.target;
      const {
        updateName,
        updatePseudo,
        updateCity,
      } = store.getState().user;

      if (targetData === 'name') {
        axios.put(`${localAPI}/user/edit/${targetData}`, {
          name: updateName,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveUser(response.data));
            store.dispatch(showConfirmChangeData());
            setTimeout(() => {
              store.dispatch(closeModal());
            }, 2000);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
      else if (targetData === 'pseudo') {
        axios.put(`${localAPI}/user/edit/${targetData}`, {
          pseudo: updatePseudo,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveUser(response.data));
            store.dispatch(showConfirmChangeData());
            setTimeout(() => {
              store.dispatch(closeModal());
            }, 2000);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
      else if (targetData === 'city') {
        axios.put(`${localAPI}/user/edit/${targetData}`, {
          city: updateCity,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveUser(response.data));
            store.dispatch(showConfirmChangeData());
            setTimeout(() => {
              store.dispatch(closeModal());
            }, 2000);
          })
          .catch((error) => {
            console.warn(error);
          });
      }

      next(action);
      break;
    }

    case UPDATE_DATA_WITH_PASSWORD: {
      const token = localStorage.getItem('token');
      const targetData = action.target;
      const {
        updateEmail,
        newPassword,
        newVerifPassword,
        verifPasswordChangeData,
      } = store.getState().user;

      if (targetData === 'email') {
        axios.post(`${localAPI}/user/edit/${targetData}`, {
          email: updateEmail,
          password: verifPasswordChangeData,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveUser(response.data));
            store.dispatch(showConfirmChangeData());
            setTimeout(() => {
              store.dispatch(closeModal());
            }, 2000);
          })
          .catch((error) => {
            console.warn(error);
            store.dispatch(catchError('La requête a échoué, veuillez réessayer.'));
          });
      }
      else if (targetData === 'password') {
        axios.post(`${localAPI}/user/edit/${targetData}`, {
          password: verifPasswordChangeData,
          newPassword,
          newPasswordVerif: newVerifPassword,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(saveUser(response.data));
            store.dispatch(showConfirmChangeData());
            setTimeout(() => {
              store.dispatch(closeModal());
            }, 2000);
          })
          .catch((error) => {
            console.warn(error);
            store.dispatch(catchError('La requête a échoué, veuillez réessayer.'));
          });
      }

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
