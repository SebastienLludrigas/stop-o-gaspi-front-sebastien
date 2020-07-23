import { connect } from 'react-redux';

// === on importe le composant de présentation
import Product from 'src/components/Product';

import { updateProductField, handmadeProduct } from 'src/actions/product';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  name: state.user.name,
  elaboration_date: state.user.elaboration_date,
  expiration_date: state.user.expiration_date,
  quantity: state.user.quantity,
  isLogged: state.user.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  onChange: (newValue, name) => {
    console.log(`La valeur du champ ${name} est : ${newValue}`);
    dispatch(updateProductField(newValue, name));
  },
  handmadeProduct: () => {
    dispatch(handmadeProduct());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Product);
