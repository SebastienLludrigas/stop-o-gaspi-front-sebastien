/* eslint-disable camelcase */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import Scanner from './Scanner';
import './scanProduct.scss';

const ScanProduct = ({
  scanCode,
  modal,
  scanDatas,
  toggleModal,
  onDetected,
  // datas,
  status,
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  return (
    <>
      {/* {console.log(scanDatas)}
      {console.log(scanCode)} */}

      {modal && (
        <div className="modal">
          <i className="fas fa-times" onClick={toggleModal} />
          <div className="modal-body">
            <div className="modal-content">
              <Scanner handleScan={onDetected} />
            </div>
          </div>
        </div>
      )}

      {/* {console.log(datas.product)}
      {console.log(datas)} */}

      {status === 0 && (
        <div className="scanError">
          <p>Désolé, votre scan n'a pas fonctionné.</p>
          <p>Veuillez réessayer.</p>
        </div>
      )}

      {status === 1 && (
        <div className="scanSuccess">
          <p>Félicitations ! Votre scan a fonctionné.</p>
          <p>Retournez dans votre Pantry pour voir</p>
          <p>votre nouveau produit</p>
        </div>
      )}

      <div className="scanPage">
        <animated.div
          style={scanText}
          config={{ delay: 2000, duration: 2000 }}
        >
          <div className="right_scanPage">

            <div className="scanInput">
              <h2>je scanne mon code barre :</h2>
              <div onClick={toggleModal} className="btn_scan_direct"><span className="fas fa-barcode" /></div>
            </div>

            <div className="manualInput">
              <h2>je saisie mon code barre :</h2>
              <input type="text" name="" required="" />
              <div className="btn_validate_barcode">Valider</div>
            </div>

          </div>
        </animated.div>

      </div>
    </>
  );
};

ScanProduct.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  // handleInput: PropTypes.func.isRequired,
  onDetected: PropTypes.func.isRequired,
  scanCode: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  scanDatas: PropTypes.object.isRequired,
  status: PropTypes.number,
  // datas: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     product: PropTypes.object.isRequired,
  //   }),
  // ),
};

ScanProduct.defaultProps = {
  status: 2,
  // datas: [],
};

export default ScanProduct;
