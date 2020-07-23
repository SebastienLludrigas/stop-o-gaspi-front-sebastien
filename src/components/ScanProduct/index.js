/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import InfosProduct from 'src/components/InfosProduct';
import Scanner from './Scanner';
import './scanProduct.scss';

const ScanProduct = ({
  isLogged,
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
  productFound,
  cleanUp,
}) => {
  const scanText = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  const handleChange = (evt) => {
    onChangeBarCode(evt.target.value);
  };

  useEffect(() => {
    cleanUp();
    console.log('Je cleane le up!');
  }, []);

  return (
    <div className="scanPage">
      <div className="right_scanPage">
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

        {(status === 1) && (
        <div className="add-product">
          <div className="scanSuccess">
            <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
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

        {(status === 3) && (
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

        {!productFound && (
        <>
          <div className="productNotFound">
            <i className="fas fa-times scan-info" onClick={toggleScanInfo} />
            <p>Votre produit n'a pas été trouvé<br />
              dans notre base de données..<br />
              Il est possible que ce produit ne soit pas<br />
              un produit alimentaire, ou que le code-barres soit erroné.<br />
              Veuillez réessayer.
            </p>
          </div>
          <div className="arrow-down-notFound" />
        </>
        )}
        {(status === 0) && (
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
            <h2>je saisie mon code barre :</h2>
            <input onChange={handleChange} type="text" value={barCode} />
            <div
              onClick={catchBarCode}
              className="btn_validate_barcode"
            >
              Valider
            </div>
          </div>

          {(status === 1 && productFound) && (
            <div className="input-dlc ">
              <InfosProduct onChange={onChange} handleAddProduct={handleAddProduct} />
            </div>
          )}

        </div>
      </animated.div>
      {!isLogged && <Redirect to="/connexion" />}
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
  productFound: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  toggleScanInfo: PropTypes.func.isRequired,
  onDetected: PropTypes.func.isRequired,
  currentProduct: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  status: PropTypes.number,
  barCode: PropTypes.string.isRequired,
};

ScanProduct.defaultProps = {
  status: 2,
};

export default ScanProduct;
