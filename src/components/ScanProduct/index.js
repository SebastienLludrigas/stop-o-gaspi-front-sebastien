import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Scanner from './Scanner';
import Result from './Result';
import './scanProduct.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScanProduct = ({
  scanCode,
  modal,
  scanSuccess,
  toggleModal,
  handleInput,
  onDetected,
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  return (
    <>
      <div>

        {scanSuccess ? (
          <Result
            key="scanResult"
            scanCode={scanCode}
            handleInput={handleInput}
          />
        ) : null}
        {/* <input id="scanner_result" type="text" defaultValue={scanCode} />
        {/* <input id="scanner_result" type="text" defaultValue={result} /> */}
        {/* <input id="scanner_result" type="text" defaultValue={scanSuccess} /> */} */}

        <Modal show={modal} onHide={toggleModal}>
          <Modal.Header closeButton="true" />
          <Modal.Body>
            <Scanner handleScan={onDetected} />
          </Modal.Body>
        </Modal>
      </div>
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
  handleInput: PropTypes.func.isRequired,
  onDetected: PropTypes.func.isRequired,
  scanCode: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  scanSuccess: PropTypes.bool.isRequired,
};

export default ScanProduct;
