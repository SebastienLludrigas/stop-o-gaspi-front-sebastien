// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="" component={Main} />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
