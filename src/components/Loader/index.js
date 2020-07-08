import React from 'react';

// == Import
import Fridge from 'src/components/Fridge';
import './loader.scss';

// == Composant
const Loader = () => (
  <div className="loaderPage">

    <div className="l-container">
      <div className="food-loader">
        <i className="apple fas fa-apple-alt" />
        <i className="cheese fas fa-cheese" />
        <i className="meat fas fa-drumstick-bite" />
        <i className="ic fas fa-ice-cream" />
        <i className="hand fas fa-hand-holding" />
      </div>
    </div>
    <div className="word3points">
      <span id="word-holder" />
      <div id="content">
        <div id="center">
          <div id="loader-linear" />
          <div id="loader-rotate" />
        </div>
      </div>
      
    </div>
  </div>
);

// == Export
export default Loader;
