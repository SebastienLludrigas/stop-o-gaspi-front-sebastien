// == Import npm
import React from 'react';

import Fridge from './Fridge';
import LogoGaspi from './Logo';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <LogoGaspi />
    <Fridge />
  </div>
);

// == Export
export default App;
