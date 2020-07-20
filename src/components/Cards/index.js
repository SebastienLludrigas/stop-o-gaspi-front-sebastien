// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { sortByDate } from 'src/utils';
import Card from './Card';
import './cards.scss';

// == Composant
const Cards = ({
  datas,
  toggleDeleteConfirm,
  deleteProduct,
  displayDeleteConfirm,
}) => (
  <div className="cards">
    {sortByDate(datas).map((data) => (
      <Card
        key={data.id}
        {...data}
        toggleDeleteConfirm={toggleDeleteConfirm}
        deleteProduct={deleteProduct}
        displayDeleteConfirm={displayDeleteConfirm}
      />
    ))}
  </div>

);

Cards.propTypes = {
  datas: PropTypes.array.isRequired,
  displayDeleteConfirm: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
};

// == Export
export default Cards;
