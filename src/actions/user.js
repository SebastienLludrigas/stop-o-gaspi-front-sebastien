export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const ON_CHANGE = 'ON_CHANGE';
export const ON_CHANGE_BAR_CODE = 'ON_CHANGE_BAR_CODE';
export const CATCH_BAR_CODE = 'CATCH_BAR_CODE';
export const HANDLE_ADD_PRODUCT = 'HANDLE_ADD_PRODUCT';
export const ADD_PRODUCT_TO_PANTRY = 'ADD_PRODUCT_TO_PANTRY';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const CLEAN_UP = 'CLEAN_UP';
export const ALERT_CHANGE = 'ALERT_CHANGE';
export const ON_CHANGE_REGISTRATION = 'ON_CHANGE_REGISTRATION';
export const HANDLE_REGISTRATION = 'HANDLE_REGISTRATION';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const onChange = (newValue, name) => ({
  type: ON_CHANGE,
  newValue,
  name,
});

export const onChangeBarCode = (newValue) => ({
  type: ON_CHANGE_BAR_CODE,
  newValue,
});

export const catchBarCode = () => ({
  type: CATCH_BAR_CODE,
});

export const handleAddProduct = () => ({
  type: HANDLE_ADD_PRODUCT,
});

export const addProductToPantry = (datas) => ({
  type: ADD_PRODUCT_TO_PANTRY,
  datas,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const cleanUp = () => ({
  type: CLEAN_UP,
});

export const alertChange = (value) => ({
  type: ALERT_CHANGE,
  value,
});

export const onChangeRegistration = (newValue, name) => ({
  type: ON_CHANGE_REGISTRATION,
  newValue,
  name,
});

export const handleRegistration = () => ({
  type: HANDLE_REGISTRATION,
});
