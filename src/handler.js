// import secp256k1 from 'secp256k1';

export default function handler(state, tx) {  
  let senderAddress = tx.data.from.toString('hex')
  let receiverAddress = tx.data.to.toString('hex')
  let amount = Number(tx.data.amount)
  let senderBalance = state.balances[senderAddress] || 100
  let receiverBalance = state.balances[receiverAddress] || 100
  if(senderAddress === receiverAddress || tx.data.amount > senderBalance) {
    return
  }
  senderBalance -= amount
  receiverBalance += amount

  state.transactions.push({
    timestamp: Date.now(),
    from: senderAddress,
    to: receiverAddress,
    amount: amount
  })

  state.balances[senderAddress] = senderBalance
  state.balances[receiverAddress] = receiverBalance
  console.log('after', state)
}

// function hashTx(tx) {
//   // we should do this in the handler, but it's buggy idk why it doesnt' work
//   console.log(secp256k1.verify(hashTx(tx.data), tx.signature, tx.data.from));
//   let txBytes = JSON.stringify(tx);
//   let txHash = createHash('sha256')
//       .update(txBytes)
//       .digest();
//   return txHash;
// }