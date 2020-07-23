import { connect } from 'react-redux';

// === on importe le composant de présentation
import Registration from 'src/components/Registration';

import { onChangeRegistration, handleRegistration } from 'src/actions/user';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  email: state.user.registrationEmail,
  name: state.user.registrationName,
  City: state.user.registrationCity,
  password: state.user.registrationPassword,
  verifPassword: state.user.registrationVerifPassword,
  pseudo: state.user.registrationPseudo,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  onChangeRegistration: (newValue, name) => {
    console.log(`La valeur du champ ${name} est : ${newValue}`);
    dispatch(onChangeRegistration(newValue, name));
  },
  handleRegistration: () => {
    dispatch(handleRegistration());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
