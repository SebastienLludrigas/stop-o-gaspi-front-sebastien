import staticDatas from 'src/staticDatas';
import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  ON_CHANGE,
  ON_CHANGE_BAR_CODE,
  CATCH_BAR_CODE,
  ADD_PRODUCT_TO_PANTRY,
  HANDLE_ADD_PRODUCT,
} from '../actions/user';
import { PRODUCT_RECOVERY } from '../actions/datas';
import { TOGGLE_MODAL, TOGGLE_SCAN_INFO, ON_DETECTED } from '../actions/scanner';

const initialState = {
  // contenu de l'input pour l'adresse e-mail
  email: '',
  // contenu de l'input pour le mot de passe
  password: '',
  // informations sur l'utilisateur

  info: {},
  // indique si l'utilisateur est loggué
  isLogged: false,
  userProducts: staticDatas,
  currentProduct: {},
  productFound: true,
  finalProduct: {},
  status: 2,
  modal: false,
  scanCode: '',
  barCode: '',
  scanDatas: {},
  dlc: '',
  quantite: 1,

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case ON_CHANGE:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case ON_CHANGE_BAR_CODE:
      return {
        ...state,
        barCode: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        info: action.data,
        // isLogged: action.isLogged,
        email: '',
        password: '',
      };

    case ON_DETECTED: {
      if (action.result.codeResult.code === 13) {
        return {
          ...state,
          modal: false,
          scanCode: action.result ? action.result.codeResult.code : '',
          scanDatas: action.result,
          status: 1,
        };
      }
      return {
        ...state,
        modal: false,
        scanCode: action.result ? action.result.codeResult.code : '',
        scanDatas: action.result,
        status: 0,
      };
    }

    case PRODUCT_RECOVERY: {
      if (action.datas.status_verbose === 'product not found') {
        return {
          ...state,
          productFound: false,
          status: 2,
          barCode: '',
        };
      }
      // eslint-disable-next-line no-else-return
      else if (action.datas.status_verbose === 'no code or invalid code') {
        return {
          ...state,
          productFound: false,
          // status: 0,
          barCode: '',
        };
      }
      return {
        ...state,
        currentProduct: action.datas,
        productFound: true,
        status: 1,
        barCode: '',
      };
    }

    // case CATCH_BAR_CODE:
    //   if (state.barCode !== 13) {
    //     return {
    //       ...state,
    //       status: 8,
    //       barCode: '',
    //     };
    //   }
    //   return state;

    case HANDLE_ADD_PRODUCT:
      return {
        ...state,
        status: 2,
      };

    case ADD_PRODUCT_TO_PANTRY:
      return {
        ...state,
        userProducts: [action.datas, ...state.userProducts],
        status: 3,
      };

      // case HANDLE_ADD_PRODUCT: {
      //   // console.log(`Voici le dlc : ${state.dlc} et voici la quantité : ${state.quantite}`);

      //   // eslint-disable-next-line prefer-destructuring
      //   const product = state.currentProduct.product;

      //   const tempProduct = {
      //     name: product.product_name_fr,
      //     brand: product.brands,
      //     image: product.image_front_thumb_url,
      //     product_quantity: product.quantity,
      //     ingredients: product.ingredients_text,
      //     quantity: parseInt(state.quantite, 10),
      //     nutriscore_grade: product.nutriscore_grade,
      //     barcode: state.currentProduct.code,
      //     expiration_date: state.dlc,
      //   };

      //   console.log(tempProduct);

      //   return {
      //     ...state,
      //     finalProduct: tempProduct,
      //     userProducts: [tempProduct, ...staticDatas],
      //     status: 2,
      //   };
      // }

    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
        productFound: true,
        status: 2,
      };
    }

    case TOGGLE_SCAN_INFO:
      return {
        ...state,
        status: 2,
        productFound: true,

      };

    default: return state;
  }
};

export default user;
