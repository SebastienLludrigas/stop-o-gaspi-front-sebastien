// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// == Import
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Pantry from 'src/components/Pantry';
import Footer from 'src/components/Footer';
import Connexion from 'src/components/Registration/Connexion';
import Inscription from 'src/components/Registration';
import Dashboard from 'src/components/Dashboard';
import Product from 'src/components/Product';
import ScanProduct from 'src/components/ScanProduct';
import Page404 from 'src/components/Page404';

import './styles.scss';
// import MyAccount from '../MyAccount';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/pantry" component={Pantry} />
      <Route exact path="/connexion" component={Connexion} />
      <Route exact path="/inscription" component={Inscription} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/settings" component={Dashboard} />
      <Route exact path="/scan-product" component={ScanProduct} />
      <Route path="/" component={Page404} />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
