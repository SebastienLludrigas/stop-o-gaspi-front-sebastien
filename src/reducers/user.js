import staticDatas from 'src/staticDatas';
import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  DLC_CHANGE,
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
  status: 2,
  modal: false,
  scanCode: '',
  scanDatas: {},
  dlc: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case DLC_CHANGE:
      return {
        ...state,
        dlc: action.newDlc,
      };

    case SAVE_USER:
      return {
        ...state,
        info: action.data,
        isLogged: action.isLogged,
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
        };
      }
      return {
        ...state,
        currentProduct: action.datas,
        productFound: true,
        status: 1,
      };
    }

    case HANDLE_ADD_PRODUCT:
      return {
        ...state,
        userProducts: [{state.dlc,...state.currentProduct}, ...state.staticDatas],
        status: 2,
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
        productFound: true,
      };

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
