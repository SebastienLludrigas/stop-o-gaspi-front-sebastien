/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';

import burgerReducer from 'src/reducers/burger';
import myaccountReducer from 'src/reducers/myaccount';
import userReducer from 'src/reducers/user';

const rootReducer = combineReducers({
  // nom du reducer qui gère cette partie du state
  burger: burgerReducer,
  myaccount: myaccountReducer,
  user: userReducer,
});

export default rootReducer;
