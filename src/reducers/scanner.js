import {
  TOGGLE_MODAL,
  ON_DETECTED,
} from 'src/actions/scanner';

const initialState = {
  // results: [],
  scanCode: '',
  modal: false,
  scanDatas: {},
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
    default: return state;
  }
};

export default scanner;
