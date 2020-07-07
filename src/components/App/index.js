// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Pantry from 'src/components/Pantry';
import Footer from 'src/components/Footer';
import Connexion from 'src/components/Registration/connexion';
import Inscription from 'src/components/Registration';


import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/pantry" component={Pantry} />
      <Route exact path="/connexion" component={Connexion} />
      <Route exact path="/inscription" component={Inscription} />

    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
