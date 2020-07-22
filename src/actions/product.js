// === action types
export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD';
export const HANDMADE_PRODUCT = 'HANDMADE_PRODUCT';
export const ADD_HANDMADE_PRODUCT = 'ADD_HANDMADE_PRODUCT';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const FILL_PANTRY = 'FILL_PANTRY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const TOGGLE_DELETE_CONFIRM = 'TOGGLE_DELETE_CONFIRM';
export const TOGGLE_UPDATE_DLC = 'TOGGLE_UPDATE_DLC';
export const TOGGLE_UPDATE_QUANTITY = 'TOGGLE_UPDATE_QUANTITY';
export const DLC_CHANGE = 'DLC_CHANGE';
export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';
export const SUBMIT_NEW_DLC = 'SUBMIT_NEW_DLC';
export const SUBMIT_NEW_QUANTITY = 'SUBMIT_NEW_QUANTITY';

// === action creators
export const updateProductField = (newValue, name) => ({
  type: UPDATE_PRODUCT_FIELD,
  newValue,
  name,
});

export const handmadeProduct = () => ({
  type: HANDMADE_PRODUCT,
});

export const addHandMadeProduct = (datas) => ({
  type: ADD_HANDMADE_PRODUCT,
  datas,
});

export const getAllProducts = (datas) => ({
  type: GET_ALL_PRODUCTS,
  datas,
});

export const fillPantry = (datas) => ({
  type: FILL_PANTRY,
  datas,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

export const toggleDeleteConfirm = (id) => ({
  type: TOGGLE_DELETE_CONFIRM,
  id,
});

export const toggleUpdateDlc = (id) => ({
  type: TOGGLE_UPDATE_DLC,
  id,
});

export const toggleUpdateQuantity = (id) => ({
  type: TOGGLE_UPDATE_QUANTITY,
  id,
});

export const dlcChange = (newValue) => ({
  type: DLC_CHANGE,
  newValue,
});

export const quantityChange = (newValue) => ({
  type: QUANTITY_CHANGE,
  newValue,
});

export const submitNewDlc = () => ({
  type: SUBMIT_NEW_DLC,
});

export const submitNewQuantity = () => ({
  type: SUBMIT_NEW_QUANTITY,
});
