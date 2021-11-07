/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

const Scanner = ({ handleScan }) => {
  const init = () => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: { min: 200, max: 1280 },
            height: { min: 150, max: 720 },
            aspectRatio: { min: 4 / 3, max: 16 / 9 },
            facingMode: 'environment', // ou environment => essayer l'un ou l'autre pour voir celui qui marche le
            // mieux
          },

          // Supprimer cette partie semble ne pas changer grand chose aux performances
          area: {
            // defines rectangle of the detection/localization area
            top: '0%', // top offset
            right: '0%', // right offset
            left: '0%', // left offset
            bottom: '0%', // bottom offset
          },
        },

        frequency: 'full',

        locator: {
          // essayer différentes tailles entre : x-small, small, medium, large, x-large
          patchSize: 'x-small',
          halfSample: true,
        },

        numOfWorkers: 4,
        decoder: {
          // Type de code-barre à rechercher
          readers: [
            'ean_reader',
            // 'ean_8_reader',
          ],
        },

        // Essayer sur true ou sur false, cela peut améliorer la performance
        locate: false,
      },

      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      },
    );
  };

  const onDetected = (result) => {
    const code = result;

    Quagga.stop();
    return handleScan(code);
  };

  const onProcessed = (result) => {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute('width'), 10),
          parseInt(drawingCanvas.getAttribute('height'), 10),
        );
        result.boxes
          .filter((box) => box !== result.box)
          .forEach((box) => {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 4,
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: '#00F',
          lineWidth: 2,
        });

        Quagga.ImageDebug.drawPath(
          result.line,
          { x: 'x', y: 'y' },
          drawingCtx,
          { color: 'red', lineWidth: 3 },
        );
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      init();
      Quagga.onDetected(onDetected);
      Quagga.onProcessed(onProcessed);
    }

    return () => {
      isMounted = false;
      Quagga.stop();
    };
  }, []);

  return <div id="interactive" className="viewport smallView" />;
};

Scanner.propTypes = {
  handleScan: PropTypes.func.isRequired,
};

export default Scanner;
