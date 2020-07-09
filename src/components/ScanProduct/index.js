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
  image_small_url,
  status,
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  return (
    <>
      {console.log(scanDatas)}
      {console.log(scanCode)}

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

      {status === 1 && (
        <div className="test-datas">
          <p>Félicitations ! Vous venez de scanner votre premier produit avec succès</p>
          <img src={image_small_url} alt="" />
        </div>
      )}

      {status === 0 && (
        <div className="test-datas">
          <p>Désolé, votre scan n'a pas fonctionné...</p>
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
  status: PropTypes.number.isRequired,
  image_small_url: PropTypes.string.isRequired,
};

export default ScanProduct;
