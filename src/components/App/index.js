// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;
