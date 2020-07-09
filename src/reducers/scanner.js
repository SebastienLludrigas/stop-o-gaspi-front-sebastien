import {
  TOGGLE_MODAL,
  ON_DETECTED,
} from 'src/actions/scanner';
import { SAVE_DATAS } from 'src/actions/datas';

const initialState = {
  // results: [],
  scanCode: '',
  modal: false,
  scanDatas: {},
  status: 3,
  image_small_url: '',
};

const scanner = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    case ON_DETECTED:
      return {
        ...state,
        modal: false,
        scanCode: action.result ? action.result.codeResult.code : '',
        scanDatas: action.result,
      };

    case SAVE_DATAS:
      return {
        ...state,
        status: action.datas.status,
        image_small_url: action.datas.product.image_small_url,
      };
    default: return state;
  }
};

export default scanner;
