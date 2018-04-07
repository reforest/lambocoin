import vstruct from 'varstruct';

const TxStruct = vstruct([
  { name: 'amount', type: vstruct.UInt64BE },
  { name: 'senderPubKey', type: vstruct.Buffer(33) },
  { name: 'senderAddress', type: vstruct.Buffer(32) },
  { name: 'receiverAddress', type: vstruct.Buffer(32) },
  { name: 'nonce', type: vstruct.UInt32BE }
])

export default TxStruct;