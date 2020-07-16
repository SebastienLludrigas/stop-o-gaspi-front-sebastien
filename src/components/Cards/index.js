// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Card from './Card';
import './cards.scss';

// == Composant
const Cards = ({ datas }) => {
  // const changeDatesFormat = datas.filter((data) => (Date.parse(data.expiration_date)));

  // console.log(changeDatesFormat.sort((a, b) => a - b));


  // eslint-disable-next-line no-return-assign
  const changeDatesFormat = datas.filter((data) => (
    data.expiration_date = (Date.parse(data.expiration_date))
  ));

  // console.log(changeDatesFormat);

  changeDatesFormat.sort((a, b) => a.expiration_date - b.expiration_date);

  // console.log(changeDatesFormat);
  

  return (
    <div className="cards">
      {changeDatesFormat.map((data) => (
        <Card
          key={data.idi}
          {...data}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  datas: PropTypes.array.isRequired,
};

// == Export
export default Cards;
