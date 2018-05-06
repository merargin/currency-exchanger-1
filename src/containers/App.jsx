import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import Header from '../components/header/Header';
import Exchange from '../components/convert/Exchange';

import * as inputHandler from '../actions/FormDataActions';
import * as currencyHandler from '../actions/CurrencyActions';
import * as rateActions from '../actions/RateActions';
import * as accountActions from '../actions/AccountActions';

import './App.css';

const App = (props) => {
  const {
    onInputChange,
    onCurrencyChange,
    formData,
    currencies,
    rate,
    getRate,
    accounts,
    exchange,
    notification,
    exchangeLink,
  } = props;

  return (
    <Grid>
      <Header
        exchange={exchange}
        isNotificationVisible={notification.isVisible}
        isExchangeDisabled={exchangeLink.isDisabled}
      />
      <Exchange
        onInputChange={onInputChange}
        formData={formData}
        currencies={currencies}
        onCurrencyChange={onCurrencyChange}
        rate={rate}
        getRate={getRate}
        accounts={accounts}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  formData: state.formData,
  currencies: state.currencies,
  rate: state.rate,
  accounts: state.accounts,
  notification: state.notification,
  exchangeLink: state.exchangeLink,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: bindActionCreators(inputHandler.default, dispatch),
  onCurrencyChange: bindActionCreators(currencyHandler.default, dispatch),
  getRate: bindActionCreators(rateActions.default, dispatch),
  exchange: bindActionCreators(accountActions.default, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
