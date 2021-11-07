/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InfosProduct from 'src/components/InfosProduct';
import Scanner from './Scanner';
import './scanProduct.scss';

const ScanProduct = ({
  modal,
  barCode,
  currentProduct,
  onChange,
  onChangeBarCode,
  catchBarCode,
  handleAddProduct,
  toggleModal,
  onDetected,
  status,
  toggleScanInfo,
  // productFound,
  cleanUp,
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  const handleChange = (evt) => {
    onChangeBarCode(evt.target.value);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      cleanUp();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="scanPage">
      <div className="right_scanPage">
        {modal && (
          <div className="modal">

            <div className="modal-body">
              <div className="modal-content">
                <i className="fas fa-times camCroix" onClick={toggleModal} />
                <Scanner handleScan={onDetected} />
              </div>
            </div>
          </div>
        )}

        {(status === 'product found') && (
        <div className="add-product">
          <div className="scanSuccess">
            <i className="fas fa-times scan-info croixScanSuccesFirst" onClick={toggleScanInfo} />
            <p>Je viens de scanner le produit  <br />
              <mark>{currentProduct.product.product_name_fr}</mark><br />
              de la marque
              <mark>{currentProduct.product.brands}</mark><br />
              <br />
            </p>
          </div>
          <div className="arrow-down-success" />
        </div>
        )}

        {(status === 'product added') && (
        <div className="add-product">
          <div className="scanSuccess">
            <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
            <p>Ajout de votre produit<br />
              <mark>{currentProduct.product.product_name_fr}</mark><br />
              de la marque<br />
              <mark>{currentProduct.product.brands}</mark><br />

              <Link to="pantry">
                au Pantry réussie
              </Link>
            </p>
          </div>
          <div className="arrow-down-success" />
        </div>
        )}

        {(status === 'product not found') && (
        <>
          <div className="productNotFound">
            <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
            <p>Votre produit n'a pas été trouvé<br />
              dans notre base de données...<br />
              Veuillez réessayer.
            </p>
          </div>
          <div className="arrow-down-notFound" />
        </>
        )}
        {(status === 'code invalid') && (
          <>
            <div className="scanError">
              <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
              <div className="text">
                <p>Désolé,<br />
                  votre scan n'a pas fonctionné...<br />
                  Veuillez réessayer.
                </p>
              </div>
            </div>
            <div className="arrow-down-error" />
          </>
        )}
      </div>

      <animated.div
        style={scanText}
        config={{ delay: 2000, duration: 2000 }}
      >
        <div className="left_scanPage">
          <div className="scanInput">
            <h2>je scanne mon code barre :</h2>
            <div onClick={toggleModal} className="btn_scan_direct"><span className="fas fa-barcode" /></div>
          </div>

          <div className="manualInput">
            <h2>je saisis mon code barre :</h2>
            <input onChange={handleChange} type="text" value={barCode} />
            <div
              onClick={catchBarCode}
              className="btn_validate_barcode"
            >
              Valider
            </div>
          </div>

          {(status === 'product found') && (
            <div className="input-dlc ">
              <InfosProduct onChange={onChange} handleAddProduct={handleAddProduct} />
            </div>
          )}

        </div>
      </animated.div>

    </div>
  );
};

ScanProduct.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeBarCode: PropTypes.func.isRequired,
  catchBarCode: PropTypes.func.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  toggleScanInfo: PropTypes.func.isRequired,
  onDetected: PropTypes.func.isRequired,
  currentProduct: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  barCode: PropTypes.string.isRequired,
};

export default ScanProduct;
