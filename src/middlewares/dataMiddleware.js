import axios from 'axios';

import { HANDLE_DATAS, saveDatas, SEND_DATAS } from 'src/actions/datas';
import { ON_DETECTED } from 'src/actions/scanner';

const datasMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case ON_DETECTED:
      // faire une requête vers l'API
      axios.get(`https://world.openfoodfacts.org/api/v0/product/${action.result.codeResult.code}.json`)
        .then((response) => {
          console.log(response.data);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(saveDatas(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case HANDLE_DATAS:
      // faire une requête vers l'API
      axios.get('http://ec2-54-161-17-91.compute-1.amazonaws.com/api/v0/products')
        .then((response) => {
          console.log(response.data);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(saveDatas(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    case SEND_DATAS:
    // faire une requête vers l'API
      axios.post('http://ec2-54-161-17-91.compute-1.amazonaws.com/api/v0/user/registrer', {
        email: 'fabclock@gmail',
        name: 'Fabio',
        City: 'Paris',
        password: 'à plumes et à bec',
        verifPassword: 'animal à plumes et à bec',
        pseudo: 'bigeon',
      })
        .then((response) => {
          console.log(response);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
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
export default datasMiddleware;
