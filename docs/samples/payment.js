'use strict';
const DivvyAPI = require('../../src').DivvyAPI; // require('divvy-lib')

const address = 'INSERT ADDRESS HERE';
const secret = 'INSERT SECRET HERE';

const api = new DivvyAPI({server: 'wss://s1.divvy.com:443'});
const instructions = {maxLedgerVersionOffset: 5};

const payment = {
  source: {
    address: address,
    maxAmount: {
      value: '0.01',
      currency: 'XDV'
    }
  },
  destination: {
    address: 'rKmBGxocj9Abgy25J51Mk1iqFzW9aVF9Tc',
    amount: {
      value: '0.01',
      currency: 'XDV'
    }
  }
};

function quit(message) {
  console.log(message);
  process.exit(0);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

api.connect().then(() => {
  console.log('Connected...');
  return api.preparePayment(address, payment, instructions).then(prepared => {
    console.log('Payment transaction prepared...');
    const {signedTransaction} = api.sign(prepared.txJSON, secret);
    console.log('Payment transaction signed...');
    api.submit(signedTransaction).then(quit, fail);
  });
}).catch(fail);
