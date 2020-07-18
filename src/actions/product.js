// === action types
export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD';
export const HANDMADE_PRODUCT = 'HANDMADE_PRODUCT';
export const ADD_HANDMADE_PRODUCT = 'ADD_HANDMADE_PRODUCT';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const FILL_PANTRY = 'FILL_PANTRY';

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
