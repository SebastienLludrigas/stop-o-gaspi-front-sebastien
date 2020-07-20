import { connect } from 'react-redux';

import { burgerTransform } from 'src/actions/burger';
import { logOut } from 'src/actions/user';

// === on importe le composant de présentation
import Nav from 'src/components/Nav';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  cross: state.burger.cross,
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleBurger: () => {
    dispatch(burgerTransform());
  },
  logOut: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
