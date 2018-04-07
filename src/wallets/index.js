import WalletFactory from './factory';

let wallets = [];
const walletNumber = process.argv[2] || 5;
for (let i = 0; i < walletNumber; i++) {
  var wallet = new WalletFactory(i);
  wallets.push(wallet);
}
console.log(wallets)
console.log(`\x1b[33m[wallets]\t${wallets.length} wallets created\x1b[0m`);

export default wallets;