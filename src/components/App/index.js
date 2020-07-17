/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// == Import

import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Pantry from 'src/containers/Pantry';
import Footer from 'src/components/Footer';
import Connexion from 'src/containers/Connexion';
import Inscription from 'src/components/Registration';
import Dashboard from 'src/components/Dashboard';
import Product from 'src/containers/Product';
import ScanProduct from 'src/containers/ScanProduct';
import Page404 from 'src/components/Page404';
import About from 'src/components/About';
import Laurie from 'src/assets/image/Blanche-neige.jpg';
import sebastien from 'src/assets/image/Prof.png';
import aurelien from 'src/assets/image/Timide.png';
import alexis from 'src/assets/image/Dormeur.png';
import greg from 'src/assets/image/Grincheux.png';
import './styles.scss';
// import MyAccount from '../MyAccount';
// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route forceRefresh path="/pantry" component={Pantry} />
      <Route path="/connexion" component={Connexion} />
      <Route path="/inscription" component={Inscription} />
      <Route path="/product" component={Product} />
      <Route path="/settings" component={Dashboard} />
      <Route path="/scan-product" component={ScanProduct} />
      <Route path="/advice-sheet/about" component={About} />
      <Route path="/" component={Page404} />
    </Switch>
    <Footer />

  </div>
);

// == Export
export default App;
