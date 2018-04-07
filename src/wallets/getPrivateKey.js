function GetPrivateKey(_index) {
  let priv = Buffer.alloc(32);
  for(let i = 0; i < priv.length; i++){
    priv[i] = i + _index;
  }
  return priv;
}

export default GetPrivateKey;
