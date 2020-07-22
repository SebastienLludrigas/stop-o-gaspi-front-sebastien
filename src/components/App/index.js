/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
// == Import

import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Pantry from 'src/containers/Pantry';
import Footer from 'src/components/Footer';
import Connexion from 'src/containers/Connexion';
import Inscription from 'src/components/Registration';
import Dashboard from 'src/containers/Dashboard';
import Product from 'src/containers/Product';
import ScanProduct from 'src/containers/ScanProduct';
import Page404 from 'src/components/Page404';
import About from 'src/components/About';
import './styles.scss';

// import MyAccount from '../MyAccount';
// == Composant
const App = ({ getAllProducts, saveUser, isLogged}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getAllProducts();
    }
    console.log('Je use l\'effect !');
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/pantry" component={Pantry} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/product" component={Product} />
        <Route path="/settings" component={Dashboard} />
        <Route path="/scan-product" component={ScanProduct} />
        <Route path="/about" component={About} />
        <Route path="/" component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
