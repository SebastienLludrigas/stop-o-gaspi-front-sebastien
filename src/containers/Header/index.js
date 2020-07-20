import { connect } from 'react-redux';

import { toggleMenu } from 'src/actions/myaccount';
import { logOut } from 'src/actions/user';

// === on importe le composant de présentation
import Header from 'src/components/Header';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  toggle: state.user.toggle,
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleMenu: () => {
    dispatch(toggleMenu());
  },
  logOut: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
