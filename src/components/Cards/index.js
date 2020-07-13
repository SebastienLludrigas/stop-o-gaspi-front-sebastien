// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Card from './Card';
import './cards.scss';

// == Composant
const Cards = ({ datas }) => (
  <div className="cards">
    {datas.map((data) => (
      <Card
        key={data.code}
        {...data.product}
      />
    ))}
  </div>
);

Cards.propTypes = {
  datas: PropTypes.array.isRequired,
};

// == Export
export default Cards;
