import { connect } from 'react-redux';

// === on importe le composant de présentation
import Pantry from 'src/components/Pantry';

import {
  getAllProducts,
  deleteProduct,
  toggleDeleteConfirm,
  toggleUpdateDlc,
  toggleUpdateQuantity,
} from 'src/actions/product';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  datas: state.user.userProducts,
  displayDeleteConfirm: state.user.displayDeleteConfirm,
  displayUpdateDlc: state.user.displayUpdateDlc,
  displayUpdateQuantity: state.user.displayUpdateQuantity,
  currentProductId: state.user.currentProductId,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  getAllProducts: () => {
    dispatch(getAllProducts());
  },
  deleteProduct: (id) => {
    dispatch(deleteProduct(id));
  },
  toggleDeleteConfirm: (id) => {
    dispatch(toggleDeleteConfirm(id));
  },
  toggleUpdateQuantity: (id) => {
    dispatch(toggleUpdateQuantity(id));
  },
  toggleUpdateDlc: (id) => {
    dispatch(toggleUpdateDlc(id));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Pantry);
