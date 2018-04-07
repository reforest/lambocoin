import lotion from 'lotion';
import coins from 'coins';
import GetPrivateKey from './getPrivateKey';

import config from '../config';
const { APP_GCI } = config;

class WalletFactory {
  constructor(_index){
    this.priv = GetPrivateKey(_index);
    this.walletObj = {};
    this.walletObj.index = _index;
    let wallet;
    lotion.connect(APP_GCI)
    .then((client)=>{
      wallet = coins.wallet(this.priv, client);
      this.walletObj.address = wallet.address.toString('hex');
      return wallet.getBalance();
    })
    .then((balance)=>{
      this.walletObj.balance = balance;
      console.log(`\x1b[33m[wallet]\t${JSON.stringify(this.walletObj)}\x1b[0m`);
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  info() {
    return this.walletObj;
  }
}

export default WalletFactory;
