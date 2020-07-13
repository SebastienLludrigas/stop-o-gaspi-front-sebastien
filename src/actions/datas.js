// === action types
export const HANDLE_DATAS = 'HANDLE_DATAS';
export const SEND_DATAS = 'SEND_DATAS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

// === action creators
export const handleDatas = () => ({
  type: HANDLE_DATAS,
});

export const addProduct = (datas, nutriscore) => ({
  type: ADD_PRODUCT,
  datas,
  nutriscore,
});

export const sendDatas = () => ({
  type: SEND_DATAS,
});
