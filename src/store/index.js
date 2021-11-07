import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/';

import dataMiddleware from 'src/middlewares/dataMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    dataMiddleware,
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
