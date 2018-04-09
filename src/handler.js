import { trasactionWithCeledon, donateTo } from 'celadon';

export default function handler(state, tx) {
  console.log(tx);
  let senderAddress = tx.data.from.toString('hex')
  let receiverAddress = tx.data.to.toString('hex')
  trasactionWithCeledon(state, {
    from: senderAddress,
    to: receiverAddress,
    org: donateTo(),
    feePortion: tx.data.feePortion || 0.01,
    amount: tx.data.amount
  })
}

// function hashTx(tx) {
//  // we should do this in the handler, but it's buggy idk why it doesnt' work
//   console.log(secp256k1.verify(hashTx(tx.data), tx.signature, tx.data.from));
//   let txBytes = JSON.stringify(tx);
//   let txHash = createHash('sha256')
//       .update(txBytes)
//       .digest();
//   return txHash;
// }