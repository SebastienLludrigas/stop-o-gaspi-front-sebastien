import axios from 'axios';
// import staticDatas from 'src/staticDatas';

import { productRecovery } from 'src/actions/datas';
import { ON_DETECTED } from 'src/actions/scanner';
import { HANDLE_ADD_PRODUCT, addProductToPantry, CATCH_BAR_CODE } from 'src/actions/user';
import { HANDMADE_PRODUCT, addHandMadeProduct } from 'src/actions/product';

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

    case HANDLE_ADD_PRODUCT: {
      // Récupération des données du state
      const {
        userProducts,
        currentProduct,
        quantite,
        dlc,
      } = store.getState().user;

      // On convertit la date du produit ajouté par l'utilisateur en date au format ISO
      // afin quelle soit acceptée par Symfony
      const date = new Date(dlc);
      const expDate = date.toISOString();

      // Ajout de l'id au nouveau produit. Juste pour les tests car Symfony me renverra
      // un id différent pour chaque produit une fois que la connexion avec le back
      // sera opérationnelle.
      const ids = userProducts.map((product) => product.idi);
      const nextId = Math.max(...ids) + 1;

      // https://jsonplaceholder.typicode.com/posts
      // http://54.196.61.131/api/v0/user/1/product/add/scan
      axios.post('http://54.196.61.131/api/v0/user/23/product/add/scan', {
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
      // Je récupère le code-barres qui est enregistré dans le state actuel
      // via la saisie manuelle
      const {
        productName,
        manufactureDate,
        expirationDate,
        productQuantity,
      } = store.getState().user;

      axios.get('https://jsonplaceholder.typicode.com/posts', {
        productName,
        manufactureDate,
        expirationDate,
        productQuantity,
      })
        .then((response) => {
          console.log(response.data);

          store.dispatch(addHandMadeProduct(response.data));
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
