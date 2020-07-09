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
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  return (
    <>
      {console.log(scanDatas)}
      {console.log(scanCode)}

      {/* <Modal show={modal} onHide={toggleModal}>
        <Modal.Header closeButton="true" />
        <Modal.Body>
          <Scanner handleScan={onDetected} />
        </Modal.Body>
      </Modal> */}

      {modal && (
        <div className="modal">
          <div className="modal-body">
            <div className="modal-content">
              <Scanner handleScan={onDetected} />
            </div>
          </div>
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
};

export default ScanProduct;
