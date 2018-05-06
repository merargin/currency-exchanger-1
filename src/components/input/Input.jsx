import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';
import './Input.css';

/**
 * Converts '- xxx' or '+ xxx' to 'xxx'
 * @param value
 * @returns {string}
 */
const getRealValue = (value) => {
  if (value[0] === '-' || value[0] === '+') {
    return value.substring(2);
  }
  return value;
};


const Input = (props) => {
  const onChange = (e) => {
    const { target } = e;
    let { value } = target;

    value = getRealValue(value);

    const afterPoint = value.split('.')[1] || '';
    const rightLengthAfterPoint = afterPoint ? afterPoint.length <= 2 : true;
    const valueNum = +value;
    const fixed = valueNum ? valueNum.toFixed(2) : null;

    if (
      value !== '' &&
      (
        (rightLengthAfterPoint && !(/\d.\d{0,2}/g).test(fixed))
        || /\s/.test(value)
        || !rightLengthAfterPoint
      )
    ) {
      target.value = target.previousValue || target.defaultValue;
      return;
    }

    target.previousValue = value;
    props.onChange(value);
  };

  return (
    <div className="input">
      <input
        type="text"
        onChange={onChange}
        className={`input__input ${props.className}`}
        autoFocus={props.autoFocus}// eslint-disable-line
        placeholder={props.placeholder}
        value={props.value}
      />
      {
        props.max > -1 && +getRealValue(props.value) > props.max
          ? <Label bsStyle="danger">You don't have enough money</Label>
          : ''
      }
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
  className: '',
  autoFocus: false,
  placeholder: '',
  value: '',
  max: -1,
};

export default Input;
