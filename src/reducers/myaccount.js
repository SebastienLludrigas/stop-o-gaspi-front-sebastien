import {
  TOGGLE_MENU,
} from 'src/actions/myaccount';

const initialState = {
  toggle: false,
};

const myaccount = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default: return state;
  }
};

export default myaccount;
