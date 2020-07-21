// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
// import Delete from 'src/components/Delete';
import Card from './Card';
import './cards.scss';

// == Composant
const Cards = ({
  datas,
  toggleDeleteConfirm,
  deleteProduct,
  displayDeleteConfirm,
  currentProductId,
}) => (
  <div className="cards">
    {datas.map((data) => (
      <Card
        key={data.id}
        id={data.id}
        {...data}
        toggleDeleteConfirm={toggleDeleteConfirm}
        deleteProduct={deleteProduct}
        displayDeleteConfirm={displayDeleteConfirm}
        currentProductId={currentProductId}
      />
    ))}
  </div>

);

Cards.propTypes = {
  datas: PropTypes.array.isRequired,
  displayDeleteConfirm: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  toggleDeleteConfirm: PropTypes.func.isRequired,
  currentProductId: PropTypes.number.isRequired,
};

// == Export
export default Cards;
