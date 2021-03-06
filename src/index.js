// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// react-router-dom : librairie qui permet d'interagir avec la barre d'adresse,
// grâce à l'API History intégrée dans le navigateur
// https://developer.mozilla.org/en-US/docs/Web/API/History
// => pouvoir lire et changer l'URL dans la barre d'adresse
// toute mon application doit être englobée dans un composant BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/containers/App';

import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
