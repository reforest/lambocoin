import lotion from 'lotion';
import coins from 'coins';

import config from './config';

const { APP_GCI } = config;

let priv = Buffer.alloc(32);
for(let i = 0; i<priv.length; i++){
  priv[i] = i
}
let walletObj = {};
let wallet;
lotion.connect(APP_GCI)
.then((client)=>{
  wallet = coins.wallet(priv, client);
  walletObj.address = wallet.address;
  return wallet.getBalance();
})
.then((balance)=>{
  walletObj.balance = balance;
  console.log(`\x1b[33m[wallet]\t${JSON.stringify(walletObj)}\x1b[0m`);
})
.catch((err)=>{
  console.error(err);
})

  // let result = await wallet.send('04oDVBPIYP8h5V1eC1PSc5JU6Vo', 5)
  // console.log(result); // { height: 42 }
