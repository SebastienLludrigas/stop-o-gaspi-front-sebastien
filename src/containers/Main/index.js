import { connect } from 'react-redux';
import { handleDatas, sendDatas } from 'src/actions/datas';

// === on importe le composant de présentation
import Main from 'src/components/Main';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  cross: state.burger.cross,
  // datas: state.datas.dataContent,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleDatas: () => {
    dispatch(handleDatas());
  },
  sendDatas: () => {
    dispatch(sendDatas());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Main);
