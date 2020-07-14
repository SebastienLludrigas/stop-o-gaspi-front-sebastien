import axios from 'axios';
import staticDatas from 'src/staticDatas';

import { HANDLE_DATAS, productRecovery, SEND_DATAS } from 'src/actions/datas';
import { ON_DETECTED } from 'src/actions/scanner';
import { HANDLE_ADD_PRODUCT, addProductToPantry, CATCH_BAR_CODE } from 'src/actions/user';

const datasMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case ON_DETECTED: {
      // Je récupère le code-barres qui est enregistré dans le state actuel
      const {
        scanCode,
      } = store.getState().user;

      // Je récupère dans barCode le code-barres du produit qui vient d'être scanné via le payload
      // de l'action ON_DETECTED
      const barCode = action.result.codeResult.code;

      console.log(action.result.codeResult.code);

      // J'exécute la requête seulement si le code-barres qui vient
      // d'être scanné contient 13 chiffres et si il est différent
      // du code-barres qui est actuellement enregistré dans le state
      if (barCode.length === 13 && barCode !== scanCode) {
        // faire une requête vers l'API
        axios.get(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
          .then((response) => {
            console.log(response.data);
            // on veut enregistrer les recettes dans le state => c'est le travail
            // du reducer => on dispatch une action qui sera traitée par un reducer
            store.dispatch(productRecovery(response.data));
          })
          .catch((error) => {
            console.warn(error);
          });
      }

      next(action);
      break;
    }
    case CATCH_BAR_CODE: {
      // Je récupère le code-barres qui est enregistré dans le state actuel
      // via la saisie manuelle
      const {
        barCode,
      } = store.getState().user;

      axios.get(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
        .then((response) => {
          console.log(response.data);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(productRecovery(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }
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

    case HANDLE_ADD_PRODUCT: {
      // Récupération des données du state
      const {
        currentProduct,
        quantite,
        dlc,
      } = store.getState().user;

      // Transformation de la date rentrée par le user en chaîne de caractères au format ISO
      // avec l'heure courante en plus (nécessaire pour que la date soit acceptée par symfony)
      const now = new Date();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const expDate = new Date(`${dlc} ${hour}:${minutes}:${seconds}`);

      // const tempProduct = {
      //   name: currentProduct.product.product_name_fr,
      //   brand: currentProduct.product.brands,
      //   image: currentProduct.product.image_front_thumb_url,
      //   product_quantity: currentProduct.product.quantity,
      //   ingredients: currentProduct.product.ingredients_text,
      //   quantity: parseInt(quantite, 10),
      //   nutriscore_grade: currentProduct.product.nutriscore_grade,
      //   barcode: currentProduct.code,
      //   expiration_date: dlc,
      // };

      axios.post('https://httpbin.org/post', {
        // Création et envoi du nouvel objet JSON avec les données d'open food + les données
        // rentrées par le user au format JSON determiné par le back
        name: currentProduct.product.product_name_fr,
        brand: currentProduct.product.brands,
        image: currentProduct.product.image_front_thumb_url,
        product_quantity: currentProduct.product.quantity,
        ingredients: currentProduct.product.ingredients_text,
        quantity: parseInt(quantite, 10),
        nutriscore_grade: currentProduct.product.nutriscore_grade,
        barcode: currentProduct.code,
        expiration_date: expDate,
      })
        .then((response) => {
          console.log(response);
          // on veut enregistrer les recettes dans le state => c'est le travail
          // du reducer => on dispatch une action qui sera traitée par un reducer
          store.dispatch(addProductToPantry([response.data.json, ...staticDatas]));
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
export default datasMiddleware;
