import { connect } from 'react-redux';

// === on importe le composant de présentation
import App from 'src/components/App';

import { getAllProducts } from 'src/actions/product';
import { fetchUserInfos } from 'src/actions/user';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  getAllProducts: () => {
    dispatch(getAllProducts());
  },
  fetchUserInfos: () => {
    dispatch(fetchUserInfos());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
