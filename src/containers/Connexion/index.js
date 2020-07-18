import { connect } from 'react-redux';

// === on importe le composant de présentation
import Connexion from 'src/components/Registration/Connexion';

import { updateUserField, logIn, logOut } from 'src/actions/user';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  isLogged: state.user.isLogged,
  username: state.user.username,
  password: state.user.password,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  onChange: (newValue, name) => {
    console.log(`La valeur du champ ${name} est : ${newValue}`);
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
