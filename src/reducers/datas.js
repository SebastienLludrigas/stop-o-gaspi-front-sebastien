import {
  SAVE_DATAS,
} from 'src/actions/datas';

const initialState = {
  dataContent: [],
};

const datas = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATAS:
      return {
        ...state,
        dataContent: action.dataContent,
      };
    default: return state;
  }
};

export default datas;
