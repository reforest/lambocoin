
let lotion = require('lotion');
let coins = require('coins');
let { randomBytes } = require('crypto');

const APP_GCI = 'e09f582bb2c772e9c8ca8b659bee867920f3e43dcb62afc5b5b5fa4b66a5524c';
let priv = randomBytes(32);
let walletObj = {};
lotion.connect(APP_GCI)
.then((client)=>{
  let wallet = coins.wallet(priv, client);
  walletObj.address = wallet.address
  return wallet.getBalance();
})
.then((balance)=>{
  walletObj.balance = balance;
  console.log(walletObj)
})
.catch((err)=>{
  console.error(err)
})

// let result = await wallet.send('04oDVBPIYP8h5V1eC1PSc5JU6Vo', 5)
// console.log(result); // { height: 42 }
