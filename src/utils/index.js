/* eslint-disable camelcase */

// Fonction qui permet de créer des classes différentes en fonction du temps
// restant (en millisecondes) entre le timestamp actuel et un timestamp futur
export const colorCode = (expiration_date, targetedClass) => {
  // Obtention de la date du jour locale de l'utilisateur
  const date = new Date();
  const current = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // Conversion de cette date en millisecondes depuis 1970
  const currentDate = Date.parse(current);
  // Conversion de la date d'expiration rentrée par l'utilisateur en millisecondes depuis 1970
  const expDateConverted = Date.parse(expiration_date);

  let classe = '';

  // Comparaison de ces deux dates afin d'attribuer des couleurs à chaque card
  // en fonction de la différence restante entre la date limite de consommation
  // et la date actuelle au format local de l'utilisateur
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
