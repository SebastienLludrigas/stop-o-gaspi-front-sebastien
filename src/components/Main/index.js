/* eslint-disable react/jsx-indent */
// == Import npm
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// == Import
import A from './pagesMain/pageMainA';
import B from './pagesMain/pageMainB';
import C from './pagesMain/pageMainC';

import './main.scss';

//
const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><A /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><B /></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><C /></animated.div>,
];

// == Composant
const Main = ({ handleDatas, sendDatas }) => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return (
    <div className="main">
        <div className="simple-trans-main" onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item];
            return <Page key={key} style={props} />;
          })}
        </div>
        <div className="btn_transHome">
          <span className="fas fa-angle-double-right" onClick="onClick" />
        </div>
      {/* <button
        className="button-tests"
        type="button"
        onClick={sendDatas}
      >Envoyer des données
      </button>
      <button
        className="button-tests"
        type="button"
        onClick={handleDatas}
      >Récupérer des données
      </button> */}
    </div>
  );
};
Main.propTypes = {
  handleDatas: PropTypes.func.isRequired,
  sendDatas: PropTypes.func.isRequired,
};

// == Export
export default Main;
