import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  ON_CHANGE,
  ON_CHANGE_BAR_CODE,
  ADD_PRODUCT_TO_PANTRY,
  HANDLE_ADD_PRODUCT,
  LOG_OUT,
  CLEAN_UP,
  ON_CHANGE_REGISTRATION,
  AUTOMATIC_CONNECTION,
  CHANGE_ALERT_DAY,
  CLOSE_MODAL,
  TOGGLE_CONFIRM_DELETE_ACCOUNT,
  DELETE_ACCOUNT,
  CLOSE_FINAL_CONFIRMATION,
} from '../actions/user';
import { PRODUCT_RECOVERY } from '../actions/datas';
import { TOGGLE_MODAL, TOGGLE_SCAN_INFO, ON_DETECTED } from '../actions/scanner';
import {
  UPDATE_PRODUCT_FIELD,
  ADD_HANDMADE_PRODUCT,
  FILL_PANTRY,
  TOGGLE_DELETE_CONFIRM,
  TOGGLE_UPDATE_DLC,
  TOGGLE_UPDATE_QUANTITY,
  DLC_CHANGE,
  QUANTITY_CHANGE,
  SHOW_CONFIRM,
  HIDE_CONFIRM_AND_REDIRECT,
  CLEAN_UP_REDIRECT_TO_PANTRY,
} from '../actions/product';
import { TOGGLE_MENU } from '../actions/myaccount';

const initialState = {
  // contenu de l'input pour l'adresse e-mail
  username: 'sebastienlludrigas@gmail.com',
  // contenu de l'input pour le mot de passe
  password: 'olaola',
  // Indique si l'utilisateur est connecté
  isLogged: false,
  // Données d'inscription d'un utilisateur
  registrationEmail: '',
  registrationName: '',
  registrationCity: '',
  registrationPassword: '',
  registrationVerifPassword: '',
  registrationPseudo: '',
  // Tous les produits de l'utilisateur connecté
  userProducts: [],
  // Infos de l'utilisateur connecté
  userInfos: {},
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
  name: '',
  elaboration_date: '',
  expiration_date: '',
  quantity: '',
  toggle: false,
  displayDeleteConfirm: false,
  displayUpdateDlc: false,
  displayUpdateQuantity: false,
  currentProductId: 0,
  currentProductDlc: '',
  currentProductQuantity: 0,
  successfulRegistration: false,
  alertDayValue: 0,
  // Affichage temporaire du message de confirmation du changement
  // du jour d'alerte
  displayTempModal: false,
  // Affichage temporaire du message de confirmation d'ajout d'un produit
  // à la main
  showConfirmAddHandmadeProduct: false,
  // Redirection de la page de saisie d'un produit à la main vers le Pantry
  redirectToPantry: false,
  displayConfirmDeleteAccount: false,
  finalConfirmation: false,
  redirectToHome: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONFIRM_DELETE_ACCOUNT:
      return {
        ...state,
        displayConfirmDeleteAccount: !state.displayConfirmDeleteAccount,
      };

    case DELETE_ACCOUNT:
      return {
        ...state,
        finalConfirmation: true,
      };

    case CLOSE_FINAL_CONFIRMATION:
      return {
        ...state,
        displayConfirmDeleteAccount: false,
        finalConfirmation: false,
        redirectToHome: true,
        isLogged: false,
      };

    case SHOW_CONFIRM:
      return {
        ...state,
        showConfirmAddHandmadeProduct: true,
      };

    case HIDE_CONFIRM_AND_REDIRECT:
      return {
        ...state,
        showConfirmAddHandmadeProduct: false,
        redirectToPantry: true,
      };

    case CLEAN_UP_REDIRECT_TO_PANTRY:
      return {
        ...state,
        redirectToPantry: false,
      };

    case CHANGE_ALERT_DAY:
      return {
        ...state,
        alertDayValue: action.value,
        displayTempModal: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        displayTempModal: false,
      };

    case AUTOMATIC_CONNECTION:
      return {
        ...state,
        username: state.registrationEmail,
        password: state.registrationPassword,
      };

    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case ON_CHANGE_REGISTRATION: {
      return {
        ...state,
        [action.name]: action.newValue,
      };
    }

    case TOGGLE_MENU:
      return {
        ...state,
        toggle: !state.toggle,
      };

    case TOGGLE_DELETE_CONFIRM:
      return {
        ...state,
        displayDeleteConfirm: !state.displayDeleteConfirm,
        currentProductId: action.id,
      };

    case TOGGLE_UPDATE_QUANTITY: {
      const quantityFound = state.userProducts.find((data) => data.id === action.id);
      return {
        ...state,
        displayUpdateQuantity: !state.displayUpdateQuantity,
        currentProductId: action.id,
        currentProductQuantity: quantityFound.quantity,
      };
    }

    case TOGGLE_UPDATE_DLC: {
      // On récupère les données du produit sur lequel a cliqué l'utilisateur
      const dlcFound = state.userProducts.find((data) => data.id === action.id);
      return {
        ...state,
        displayUpdateDlc: !state.displayUpdateDlc,
        currentProductId: action.id,
        // On affiche en valeur dans l'input la DLC actuelle du produit,
        currentProductDlc: dlcFound.expiration_date.substring(0, 10),
      };
    }

    case DLC_CHANGE:
      return {
        ...state,
        currentProductDlc: action.newValue,
      };

    case QUANTITY_CHANGE:
      return {
        ...state,
        currentProductQuantity: action.newValue,
      };

    case CLEAN_UP:
      return {
        ...state,
        toggle: false,
        status: 2,
        productFound: true,
        // modal: false,
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
        userInfos: action.userDatas,
        isLogged: true,
        successfulRegistration: true,
        redirectToHome: false,
        // username: '',
        // password: '',
      };

    case LOG_OUT: {
      localStorage.removeItem('token');

      return {
        ...state,
        isLogged: false,
        successfulRegistration: false,
      };
    }

    case FILL_PANTRY:
      return {
        ...state,
        userProducts: action.datas,
        displayDeleteConfirm: false,
        displayUpdateDlc: false,
        displayUpdateQuantity: false,
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

    case HANDLE_ADD_PRODUCT:
      return {
        ...state,
        status: 2,
      };

    case ADD_PRODUCT_TO_PANTRY:
      return {
        ...state,
        // userProducts: [action.datas, ...state.userProducts],
        userProducts: action.datas,
        status: 3,
      };

    case UPDATE_PRODUCT_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case ADD_HANDMADE_PRODUCT:
      return {
        ...state,
        userProducts: action.datas,
      };

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
