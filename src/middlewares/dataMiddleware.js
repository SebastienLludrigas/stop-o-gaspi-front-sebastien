/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import axios from 'axios';

import { productRecovery } from 'src/actions/datas';
import { ON_DETECTED } from 'src/actions/scanner';
import {
  HANDLE_ADD_PRODUCT,
  addProductToPantry,
  CATCH_BAR_CODE,
  saveUser, logOut,
} from 'src/actions/user';
import {
  HANDMADE_PRODUCT,
  getAllProducts,
  GET_ALL_PRODUCTS,
  fillPantry,
  DELETE_PRODUCT,
  SUBMIT_NEW_DLC,
  SUBMIT_NEW_QUANTITY,
  showConfirm,
  hideConfirmAndRedirect,
} from 'src/actions/product';

const laurieAPI = 'https://stopogaspiback.lauriereinette.fr/api';
const localAPI = 'https://localhost:8000/api';

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
      // d'être scanné contient 13 ou 8 chiffres et si il est différent
      // du code-barres qui est actuellement enregistré dans le state
      if ((barCode.length === 13 || barCode.length === 8) && barCode !== scanCode) {
        // faire une requête vers l'API
        axios.get(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
          .then((response) => {
            console.log(response.data);

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

          store.dispatch(productRecovery(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case GET_ALL_PRODUCTS: {
      const token = localStorage.getItem('token');
      axios.get(`${localAPI}/user/product/all/order-by-date`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(fillPantry(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.message);
          if (error.message === 'Request failed with status code 401') {
            store.dispatch(logOut());
          }
        });

      next(action);
      break;
    }

    case HANDLE_ADD_PRODUCT: {
      // Récupération des données du state
      const {
        currentProduct,
        quantite,
        dlc,
      } = store.getState().user;

      const token = localStorage.getItem('token');

      // On convertit la date du produit ajouté par l'utilisateur en date au format ISO
      // afin quelle soit acceptée par Symfony
      const date = new Date(dlc);
      const expDate = date.toISOString();

      axios.post(`${localAPI}/user/product/add/scan`, {
        // Création et envoi du nouvel objet JSON avec les données d'open food + les données
        // rentrées par le user au format JSON determiné par le back

        // idi: nextId,
        name: currentProduct.product.product_name_fr,
        brand: currentProduct.product.brands,
        image: currentProduct.product.image_front_thumb_url,
        product_quantity: currentProduct.product.quantity,
        ingredients: currentProduct.product.ingredients_text,
        quantity: parseInt(quantite, 10),
        nutriscore_grade: currentProduct.product.nutriscore_grade,
        barcode: currentProduct.code,
        expiration_date: expDate,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(addProductToPantry(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case HANDMADE_PRODUCT: {
      const {
        name,
        elaboration_date,
        expiration_date,
        quantity,
      } = store.getState().user;

      const token = localStorage.getItem('token');

      // On convertit la date du produit ajouté par l'utilisateur en date au format ISO
      // afin quelle soit acceptée par Symfony
      const dateElb = new Date(elaboration_date);
      const elbDate = dateElb.toISOString();

      const dateExp = new Date(expiration_date);
      const expDate = dateExp.toISOString();

      axios.post(`${localAPI}/user/product/add/manual`, {
        name,
        elaboration_date: elbDate,
        expiration_date: expDate,
        quantity: parseInt(quantity, 10),
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          console.log(response);

          store.dispatch(getAllProducts(response.data));
          store.dispatch(showConfirm());
          setTimeout(() => {
            store.dispatch(hideConfirmAndRedirect());
          }, 3000);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case DELETE_PRODUCT: {
      const {
        currentProductId,
      } = store.getState().user;

      const token = localStorage.getItem('token');

      axios.delete(`${localAPI}/product/delete/${currentProductId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // console.log(response.data);
          console.log(response);

          store.dispatch(getAllProducts(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case SUBMIT_NEW_DLC: {
      const {
        currentProductId,
        currentProductDlc,
      } = store.getState().user;

      const token = localStorage.getItem('token');

      // On convertit la date du produit ajouté par l'utilisateur en date au format ISO
      // afin quelle soit acceptée par Symfony
      const dateExp = new Date(currentProductDlc);
      const expDate = dateExp.toISOString();

      axios.post(`${localAPI}/product/edit/expiration-date/${currentProductId}`, {
        expiration_date: expDate,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          console.log(response);

          store.dispatch(getAllProducts(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    }

    case SUBMIT_NEW_QUANTITY: {
      const {
        currentProductId,
        currentProductQuantity,
      } = store.getState().user;

      const token = localStorage.getItem('token');

      axios.post(`${localAPI}/product/edit/quantity/${currentProductId}`, {
        quantity: parseInt(currentProductQuantity, 10),
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          console.log(response);

          store.dispatch(getAllProducts(response.data));
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
