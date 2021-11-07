// Imports des librairies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import de react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// Import locaux
import App from 'src/containers/App';
import store from 'src/store';

// Création de l'élément React racine (celui qui contient l'ensemble de l'app)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// Container de l'élément react racine
const target = document.getElementById('root');

// Déclenchement du rendu de React
render(rootReactElement, target);
