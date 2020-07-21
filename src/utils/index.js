/* eslint-disable camelcase */

// Fonction qui permet de créer des classes différentes en fonction du temps
// restant (en millisecondes) entre le timestamp actuel et un timestamp futur
export const colorCode = (expiration_date, targetedClass) => {
  const currentDate = Date.now();
  const expDateConverted = Date.parse(expiration_date);

  let classe = '';

  if ((expDateConverted - currentDate) < 0) {
    classe = `${targetedClass} finish`;
  }
  else if ((expDateConverted - currentDate) <= 86400000) {
    classe = `${targetedClass} red`;
  }
  else if ((expDateConverted - currentDate) <= 172800000) {
    classe = `${targetedClass} orange`;
  }
  else {
    classe = `${targetedClass} green`;
  }
  return classe;
};

// Fonction qui permet de trier des datas
// par l'ordre croissant de leur date (transformées en timestamp)
// export const sortByDate = (datas) => {
//   // On convertit la date saisie par l'utilisateur
//   // en timestamp (millisecondes écoulées depuis 1970)
//   // eslint-disable-next-line no-return-assign
//   const changeDatesFormat = datas.filter((data) => (
//     data.expiration_date = (Date.parse(data.expiration_date))
//   ));

//   // On trie les datas par ordre croissant de leur date
//   // en ciblant leur propriété expiration_date
//   changeDatesFormat.sort((a, b) => a.expiration_date - b.expiration_date);

//   return changeDatesFormat;
// };

export const dateConverter = (dateName) => {
  const date = new Date(dateName);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const result = date.toLocaleString('fr-FR', options);
  return result;
};
