// == Import npm
import React from 'react';



// == Import
import Header from 'src/components/Header';
import Main from 'src/components/Main';
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
