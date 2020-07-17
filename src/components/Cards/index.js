// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { sortByDate } from 'src/utils';
import Card from './Card';
import './cards.scss';

// == Composant
const Cards = ({ datas }) => (
  <div className="cards">
    {sortByDate(datas).map((data) => (
      <Card
        key={data.idi}
        {...data}
      />
    ))}
  </div>

);

Cards.propTypes = {
  datas: PropTypes.array.isRequired,
};

// == Export
export default Cards;
