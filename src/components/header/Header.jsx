import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

import './Header.css';

import Link from '../link/Link';

import * as CONSTANTS from '../../constants/CommonConstants';
import EN from '../../constants/i18n/en';


const Header = props => (
  <div>
    {
      props.isNotificationVisible ?
        <Row>
          <Alert bsStyle="success" className="notification">
            The exchange was successful
          </Alert>
        </Row>
        : ''
    }
    <Row className="header">
      <Col xs={6} className="header__left">
        <Link
          href={CONSTANTS.URL_BASE}
          text={EN.CANCEL_LINK}
        />
      </Col>
      <Col xs={6} className="header__right">
        <Link
          href={CONSTANTS.URL_EXCHANGE}
          text={EN.EXCHANGE_LINK}
          onClick={props.exchange}
          disabled={props.isExchangeDisabled}
        />
      </Col>
    </Row>
  </div>
);

Header.propTypes = {
  exchange: PropTypes.func.isRequired,
  isNotificationVisible: PropTypes.bool.isRequired,
  isExchangeDisabled: PropTypes.bool.isRequired,
};

export default Header;
