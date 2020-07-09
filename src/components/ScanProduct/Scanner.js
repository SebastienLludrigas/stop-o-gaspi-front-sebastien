/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-arrow-callback */
import React from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    // this.state = {
    //   dataUri: '',
    // };
    this.onDetected = this.onDetected.bind(this);
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: { min: 800, max: 1280 },
            height: { min: 600, max: 720 },
            aspectRatio: { min: 4 / 3, max: 16 / 9 },
            // width: 800,
            // height: 600,
            // aspectRatio: 4 / 3,
            facingMode: 'environment', // or user
          },
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
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 8,
        decoder: {
          readers: [
            'code_39_reader',
            'ean_reader',
            'ean_8_reader',
            'code_128_reader',
            'code_39_vin_reader',
            'codabar_reader',
            'upc_reader',
            'upc_e_reader',
            'i2of5_reader',
          ],
        },
        locate: true,
      },
      // eslint-disable-next-line func-names
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      },
    );
    Quagga.onDetected(this.onDetected);
    Quagga.onProcessed(this.onProcessed);
  }

  componentWillUnmount() {
    Quagga.stop();
  }

  onDetected(result) {
    const code = result;
    const { handleScan } = this.props;

    Quagga.stop();
    return handleScan(code);
  }

  onProcessed(result) {
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
          .filter(function (box) {
            return box !== result.box;
          })
          .forEach((box) => {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 2,
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: '#00F',
          lineWidth: 2,
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(
          result.line,
          { x: 'x', y: 'y' },
          drawingCtx,
          { color: 'red', lineWidth: 3 },
        );
      }
    }
  }

  getMedian(arr) {
    arr.sort((a, b) => a - b);
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
      // Odd length
      return arr[half];
    }
    return (arr[half - 1] + arr[half]) / 2.0;
  }

  render() {
    return <div id="interactive" className="viewport" />;
  }
}

Scanner.propTypes = {
  handleScan: PropTypes.func.isRequired,
};

export default Scanner;
