import secp256k1 from 'secp256k1';
import createHash from 'sha.js';

import TxStruct from './txStruct';

export default function handler(state, rawTx) {
  let tx = deserializeTx(rawTx)
  if (!verifyTx(tx)) {
    return
  }

  let senderAddress = tx.senderAddress.toString('hex')
  let receiverAddress = tx.receiverAddress.toString('hex')

  let senderBalance = state.balances[senderAddress] || 0
  let receiverBalance = state.balances[receiverAddress] || 0

  if(senderAddress === receiverAddress) {
    return
  }
  if (!Number.isInteger(tx.amount)) {
    return
  }
  if (tx.amount > senderBalance) {
    return
  }
  if (tx.nonce !== (state.nonces[senderAddress] || 0)) {
    return
  }
  senderBalance -= tx.amount
  receiverBalance += tx.amount

  state.balances[senderAddress] = senderBalance
  state.balances[receiverAddress] = receiverBalance
  state.nonces[senderAddress] = (state.nonces[senderAddress] || 0) + 1
}

function hashTx(tx) {
  let txBytes = TxStruct.encode({
    amount: tx.amount,
    senderPubKey: tx.senderPubKey,
    senderAddress: tx.senderAddress,
    nonce: tx.nonce,
    receiverAddress: tx.receiverAddress
  })
  let txHash = createHash('sha256')
    .update(txBytes)
    .digest()

  return txHash
}

function verifyTx(tx) {
  if (
    deriveAddress(tx.senderPubKey).toString('hex') !==
    tx.senderAddress.toString('hex')
  ) {
    return false
  }
  let txHash = hashTx(tx)
  return secp256k1.verify(txHash, tx.signature, tx.senderPubKey)
}

function deserializeTx(tx) {
  let deserialized = tx
  ;[
    'senderPubKey',
    'senderAddress',
    'receiverAddress',
    'signature'
  ].forEach(key => {
    deserialized[key] = Buffer.from(deserialized[key], 'base64')
  })

  return deserialized
}

function deriveAddress(pubKey) {
  return createHash('sha256')
    .update(pubKey)
    .digest()
}