/* eslint-disable camelcase */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

import DlcInput from 'src/components/DlcInput';
import Scanner from './Scanner';
import './scanProduct.scss';

const ScanProduct = ({
  scanCode,
  modal,
  scanDatas,
  dlcChange,
  handleAddProduct,
  toggleModal,
  onDetected,
  status,
  toggleScanInfo,
  productFound,
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

      {(status === 0 && productFound) && (
        <div className="scanError">
          <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
          <div className="text">
            <p>Désolé,<br />
              votre scan n'a pas fonctionné...<br />
              Veuillez réessayer.
            </p>
          </div>
        </div>
      )}

      {(status === 1 && productFound) && (
        <div className="add-product">
          <div className="scanSuccess">
            <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
            <p>Félicitations !<br />
              Votre scan a fonctionné.<br />
              Entrez maintenant la date limite de<br />
              consommation puis validez pour enregistrer<br />
              le produit dans votre Pantry
            </p>
          </div>
          <div className="input-dlc">
            <DlcInput dlcChange={dlcChange} handleAddProduct={handleAddProduct} />
          </div>
        </div>
      )}

      {!productFound && (
        <div className="productNotFound">
          <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
          <p>Votre produit n'a pas été trouvé<br />
            dans notre base de données..<br />
            Il est possible que vous n'ayez pas scanné<br />
            un produit alimentaire.<br />
            Veuillez réessayer avec un autre produit
          </p>
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
  dlcChange: PropTypes.func.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  productFound: PropTypes.bool.isRequired,
  toggleScanInfo: PropTypes.func.isRequired,
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
