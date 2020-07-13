import { connect } from 'react-redux';

import { toggleModal, onDetected, toggleScanInfo } from 'src/actions/scanner';

// === on importe le composant de présentation
import ScanProduct from 'src/components/ScanProduct';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  scanCode: state.user.scanCode,
  modal: state.user.modal,
  scanDatas: state.user.scanDatas,
  status: state.user.status,
  productFound: state.user.productFound,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleModal: () => {
    dispatch(toggleModal());
  },
  toggleScanInfo: () => {
    dispatch(toggleScanInfo());
  },
  onDetected: (result) => {
    dispatch(onDetected(result));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ScanProduct);
