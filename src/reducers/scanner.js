import {
  TOGGLE_MODAL,
  ON_DETECTED,
  HANDLE_INPUT,
} from 'src/actions/scanner';

const initialState = {
  // results: [],
  scanCode: '',
  modal: false,
  scanSuccess: false,
};

const scanner = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
        scanSuccess: false,
      };

    case ON_DETECTED:
      return {
        ...state,
        modal: false,
        scanCode: action.result ? action.result.codeResult.code : '',
        scanSuccess: action.result,
      };

    case HANDLE_INPUT:
      return {
        ...state,
        scanCode: action.value,
      };
    default: return state;
  }
};

export default scanner;
