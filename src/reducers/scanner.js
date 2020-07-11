import {
  TOGGLE_MODAL,
  ON_DETECTED,
} from 'src/actions/scanner';
// import { SAVE_DATAS } from 'src/actions/datas';

const initialState = {
  // results: [],
  scanCode: '',
  modal: false,
  scanDatas: {},
  datas: [],
  status: 2,
};

const scanner = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
        status: 2,
      };

    case ON_DETECTED: {
      if (action.result.codeResult.code.length === 13) {
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

    default: return state;
  }
};

export default scanner;
