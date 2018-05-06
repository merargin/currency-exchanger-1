import React from 'react';
import PropTypes from 'prop-types';
import EN from '../../constants/i18n/en';
import './Exchange.css';
import { CURRENCIES, CURRENTY_SYMBOLS } from '../../constants/Currencies';
import ExchangePanel from '../panel/ExchangePanel';

const Exchange = (props) => {
  const { formData, rate, currencies, getRate, accounts } = props;

  const currenciesForOptions = CURRENCIES;
  return (
    <div className="exchange">
      <div className="exchange-rate">
        {
          rate.isFetching
            ? <span>EN.LOADING</span>
            : CURRENTY_SYMBOLS[accounts.fromAccount.currency]+' 1' +' = '+CURRENTY_SYMBOLS[accounts.toAccount.currency]+' '+rate.rate
        }
      </div>
      <ExchangePanel
        onInputChange={props.onInputChange}
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="from"
        value={formData.from}
        currency={currencies.baseCurrency}
        getRate={getRate}
        account={accounts.fromAccount}
      />
      <ExchangePanel
        onInputChange={props.onInputChange}
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="to"
        value={formData.to}
        currency={currencies.toCurrency}
        getRate={getRate}
        account={accounts.toAccount}
      />
    </div>
  );
};

export default Exchange;
