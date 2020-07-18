import { connect } from 'react-redux';

// === on importe le composant de présentation
import Pantry from 'src/components/Pantry';

import { getAllProducts } from 'src/actions/product';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  datas: state.user.userProducts,
  dlc: state.user.dlc,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  getAllProducts: () => {
    dispatch(getAllProducts());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Pantry);
