export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const ON_CHANGE = 'ON_CHANGE';
export const HANDLE_ADD_PRODUCT = 'HANDLE_ADD_PRODUCT';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';

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

export const handleAddProduct = () => ({
  type: HANDLE_ADD_PRODUCT,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (data, isLogged) => ({
  type: SAVE_USER,
  data,
  isLogged,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});
