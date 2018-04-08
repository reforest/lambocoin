import { trasactionWithCeledon, donateTo } from 'celadon';

// import secp256k1 from 'secp256k1';

export default function handler(state, tx) {  
  let senderAddress = tx.data.from.toString('hex')
  let receiverAddress = tx.data.to.toString('hex')
  trasactionWithCeledon(state, {
    from: senderAddress,
    to: receiverAddress,
    org: donateTo(),
    feePortion: 0.018
  })
  console.log('after', state)
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