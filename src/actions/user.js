import { SHOW_CONFIRM } from "./product";

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
export const AUTOMATIC_CONNECTION = 'AUTOMATIC_CONNECTION';
export const CHANGE_ALERT_DAY = 'CHANGE_ALERT_DAY';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const TOGGLE_CONFIRM_DELETE_ACCOUNT = 'TOGGLE_CONFIRM_DELETE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETION_REQUEST = 'DELETION_REQUEST';
export const CLOSE_FINAL_CONFIRMATION = 'CLOSE_FINAL_CONFIRMATION';
export const CATCH_ERROR = 'CATCH_ERROR';
export const TOGGLE_UPDATE_DATA = 'TOGGLE_UPDATE_DATA';
export const CHANGE_DATA = 'CHANGE_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_DATA_WITH_PASSWORD = 'UPDATE_DATA_WITH_PASSWORD';
export const SHOW_CONFIRM_CHANGE_DATA = 'SHOW_CONFIRM_CHANGE_DATA';

export const showConfirmChangeData = () => ({
  type: SHOW_CONFIRM_CHANGE_DATA,
});

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

export const changeData = (newValue, name) => ({
  type: ON_CHANGE,
  newValue,
  name,
});

export const updateData = (target) => ({
  type: UPDATE_DATA,
  target,
});

export const updateDataWithPassword = (target) => ({
  type: UPDATE_DATA_WITH_PASSWORD,
  target,
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

export const saveUser = (userDatas) => ({
  type: SAVE_USER,
  userDatas,
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

export const automaticConnection = () => ({
  type: AUTOMATIC_CONNECTION,
});

export const changeAlertDay = (value) => ({
  type: CHANGE_ALERT_DAY,
  value,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const toggleConfirmDeleteAccount = () => ({
  type: TOGGLE_CONFIRM_DELETE_ACCOUNT,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const deletionRequest = () => ({
  type: DELETION_REQUEST,
});

export const closeFinalConfirmation = () => ({
  type: CLOSE_FINAL_CONFIRMATION,
});

export const catchError = (message) => ({
  type: CATCH_ERROR,
  message,
});

export const toggleUpdateData = (target) => ({
  type: TOGGLE_UPDATE_DATA,
  target,
});
