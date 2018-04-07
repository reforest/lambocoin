import WalletFactory from './factory';

let wallets = [];
const walletNumber = 5;
for (let i = 0; i < walletNumber; i++) {
  var wallet = new WalletFactory(i);
  wallets.push(wallet);
}

export default wallets;
console.log(wallets)
