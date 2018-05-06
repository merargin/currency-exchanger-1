import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

import './Link.css';

const Link = props =>
  (
    <Button
      href={props.href}
      type="button"
      className={`btn btn-link link ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </Button>
  );

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Link;
