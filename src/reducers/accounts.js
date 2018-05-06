import { DEFAULT_BASE_CURRENCY, DEFAULT_TO_CURRENCY, SELECT_BASE_CURRENCY, SELECT_TO_CURRENCY } from '../constants/Currencies';
import { DEFAULT_GBP_BALANCE, DEFAULT_USD_BALANCE, DEFAULT_EUR_BALANCE, EXCHANGE } from '../constants/Accounts';

const initialAccounts = [
  { currency: 'GBP', balance: DEFAULT_GBP_BALANCE },
  { currency: 'EUR', balance: DEFAULT_EUR_BALANCE },
  { currency: 'USD', balance: DEFAULT_USD_BALANCE }
];

const fromAccount = initialAccounts.find(item => item.currency === DEFAULT_BASE_CURRENCY);
const toAccount = initialAccounts.find(item => item.currency === DEFAULT_TO_CURRENCY);

const initialState = {
  accounts: initialAccounts,
  toAccount,
  fromAccount
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    
    case EXCHANGE:
      const { from, to, amountFrom, amountTo } = action;
      const stateCopied = Object.assign({}, state);
      stateCopied.accounts = stateCopied.accounts.map((account) => {
        if (account.currency === from) {
          account.balance = (account.balance - amountFrom).toFixed(4) * 1;
        }
        if (account.currency === to) {
          account.balance = (+account.balance + +amountTo).toFixed(4) * 1;
        }
        return account;
      });
      return stateCopied;

    case SELECT_BASE_CURRENCY:
      const { baseCurrency } = action;
      return { ...state, fromAccount: action.accounts.find(account => account.currency === baseCurrency) };
    
    case SELECT_TO_CURRENCY:
      const { toCurrency } = action;
      return { ...state, toAccount: action.accounts.find(account => account.currency === toCurrency) };
    
    default:
      return state;
  }
};

export default accounts;
