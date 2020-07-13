
import staticDatas from 'src/staticDatas';
import { UPDATE_USER_FIELD, SAVE_USER } from '../actions/user';
import { ADD_PRODUCT } from '../actions/datas';
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
  productFound: true,
  status: 2,
  modal: false,
  scanCode: '',
  scanDatas: {},

};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
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

    case ADD_PRODUCT: {
      if (action.datas.status_verbose === 'product not found') {
        return {
          ...state,
          productFound: false,
          status: 2,
        };
      }
      return {
        ...state,
        userProducts: [action.datas, ...state.userProducts],
        productFound: true,
        status: 1,
      };
    }

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
