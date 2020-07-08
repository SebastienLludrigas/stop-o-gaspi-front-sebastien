import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ scanCode, handleInput }) => (
  <input
    id="scanner_input"
    className="form-control"
    name="name"
    placeholder="Manually enter code"
    type="text"
    value={scanCode}
    onChange={(evt) => {
      handleInput(evt.target.value);
    }}
  />

);

Result.propTypes = {
  handleInput: PropTypes.func.isRequired,
  scanCode: PropTypes.string.isRequired,
};

export default Result;
