let lotion = require('lotion');
let coins = require('coins');
let client = await lotion.connect(APP_GCI);
let { randomBytes } = require('crypto');

let priv = randomBytes(32);
let wallet = coins.wallet(priv, client);

// wallet methods:
let address = wallet.getAddress();
console.log(address); // 'OGccsuLV2xuoDau1XRc6hc7uO24'

let balance = await wallet.getBalance();
console.log(balance); // 20

let result = await wallet.send('04oDVBPIYP8h5V1eC1PSc5JU6Vo', 5)
console.log(result); // { height: 42 }