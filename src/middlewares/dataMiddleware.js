import axios from 'axios';

import { HANDLE_DATAS, saveDatas } from 'src/actions/datas';

const datasMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case HANDLE_DATAS:
      // faire une requête vers l'API
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log(response);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(saveDatas(response.data));
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
