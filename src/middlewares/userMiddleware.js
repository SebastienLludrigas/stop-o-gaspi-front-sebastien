import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveUser,
} from '../actions/user'; // 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      // withCredentials : autorisation d'accéder au cookie
      axios.post('http://ec2-54-161-17-91.compute-1.amazonaws.com/api/v0/user/login', {
        email,
        password,
      }, {
        // withCredentials: true, // TODO ATTENTION
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case LOG_OUT:
      axios.post('logout', { // TODO
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case CHECK_LOGGED:
      axios.post('isLogged', { // TODO
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.info, response.data.logged));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
