import datas from 'src/staticDatas';

// const changeDatesFormat = datas.filter((data) => (Date.parse(data.expiration_date)));

// console.log(changeDatesFormat.sort((a, b) => a - b));

// eslint-disable-next-line no-return-assign
const changeDatesFormat = datas.filter((data) => (
  data.expiration_date = (Date.parse(data.expiration_date))
));

// console.log(changeDatesFormat);

changeDatesFormat.sort((a, b) => a.expiration_date - b.expiration_date);

// console.log(changeDatesFormat);

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
