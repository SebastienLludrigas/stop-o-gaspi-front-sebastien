import axios from 'axios';

import { HANDLE_DATAS, saveDatas, SEND_DATAS } from 'src/actions/datas';

const datasMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
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
      axios.post('http://ec2-54-161-17-91.compute-1.amazonaws.com/api/v0/products', {
        id: 1,
        name: 'Moules Marinières',
        expiration_date: [],
        archived_date: [],
        ingredients: 'Chocolat, Banane, Mayo, Sel, Poivre',
        quantity: 18,
        nutritional_composition: null,
        favorite: true,
        archived: true,
        expirated: true,
        created_at: [],
        user: {
          id: 17,
          name: 'Julien',
          city: 'Carre',
          email: 'gvaillant@tele2.fr',
          password: 'a\'`xbc',
          pseudo: 'Dominique',
          created_at: [],
        },
        brand: {
          id: 14,
          name: 'Fernandes',
        },
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
