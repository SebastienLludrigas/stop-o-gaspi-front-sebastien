import { connect } from 'react-redux';

import { toggleModal, onDetected, handleInput } from 'src/actions/scanner';

// === on importe le composant de présentation
import ScanProduct from 'src/components/ScanProduct';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  scanCode: state.scanner.scanCode,
  modal: state.scanner.modal,
  scanDatas: state.scanner.scanDatas,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleModal: () => {
    dispatch(toggleModal());
  },
  onDetected: (result) => {
    dispatch(onDetected(result));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ScanProduct);
