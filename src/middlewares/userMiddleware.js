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
          store.dispatch(saveUser());
          localStorage.setItem('token', response.data.token);
          store.dispatch(getAllProducts());
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
