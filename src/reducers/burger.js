import {
  BURGER_TRANSFORM,
} from 'src/actions/burger';

const initialState = {
  cross: false,
};

const burger = (state = initialState, action = {}) => {
  switch (action.type) {
    case BURGER_TRANSFORM:
      return {
        ...state,
        cross: !state.cross,
      };
    default: return state;
  }
};

export default burger;
