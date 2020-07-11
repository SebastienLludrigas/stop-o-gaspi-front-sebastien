import staticDatas from 'src/staticDatas';
import { UPDATE_USER_FIELD, SAVE_USER } from '../actions/user';
import { ADD_PRODUCT } from '../actions/datas';

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

    case ADD_PRODUCT:
      return {
        ...state,
        userProducts: [...state.userProducts, action.datas],
      };

    default: return state;
  }
};

export default user;
