// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// == Import
import Fridge from 'src/components/Fridge';

import './main.scss';

// == Composant
const Main = ({ cross }) => (
  <div className="main">
    <Fridge cross={cross} />
  </div>
);

Main.propTypes = {
  cross: PropTypes.bool.isRequired,
};

// == Export
export default Main;
