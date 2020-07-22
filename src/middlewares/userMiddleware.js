import axios from 'axios';

import {
  LOG_IN,
  saveUser,
  ALERT_CHANGE,
} from '../actions/user';
import { getAllProducts } from '../actions/product';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().user;
      console.log(`l'email est :${username} et le password est : ${password}`);

      axios.post('http://54.196.61.131/api/login_check', {
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

      axios.post(`http://54.196.61.131/api/user/edit/alertday/${alertLevel}`, {
        alertLevel,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // console.log(response.data);
          console.log(response);
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
