/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';

import burgerReducer from 'src/reducers/burger';
import myaccountReducer from 'src/reducers/myaccount';
import scannerReducer from 'src/reducers/scanner';
import userReducer from 'src/reducers/user';

// séparer le state en plusieurs morceaux ("tiroirs") pour mieux s'y retrouver
// createStore prend en argument un seul reducer, pour lui en fournir plusieurs
// je dois les combiner en un reducer principal qui contient les autres

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui gère cette partie du state
  burger: burgerReducer,
  myaccount: myaccountReducer,
  scanner: scannerReducer,
  user: userReducer,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que
// je descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
