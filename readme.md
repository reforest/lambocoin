<h1 align="center">
Lamborghini Coin
</h1>
<p align="center">
A Basic Cryptocurrency Built with Lotion based on awesome Tendermint. (For demo purpose)
</p>

<p align="center">
    <a href="https://travis-ci.org/reforest/lambcoin" target='_blank'>
      <img src="https://travis-ci.org/reforest/lambcoin.svg?branch=master" alt="Travis Build Status"/>
    </a>
    <a href="https://github.com/reforest/lambcoin/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
    <a href="https://github.com/reforest/lambcoin/pulls">
      <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
</p>

## Installation
```command
$ npm i --save lambocoin
```

## Use it in command line
```command
$ cd node_modules/lambocoin
// run it
$ npm start       // <- default to 3000
// or
$ npm start 3333  // <- define port to 3333
```

## Use it in Node
```javascript
import lambocoin from 'lambocoin';
const App = new lambocoin();
App.listen(3303);
```

## Endpoints
```command
<!-- GET -->
$ curl http://localhost:3000/state
<!-- POST -->
$ curl http://localhost:3000/txs -d '{}'
```



## Author

[reforest (Andy Chen)](https://github.com/reforest)

## Resources

- [lotionjs](https://lotionjs.com/)
- [Tendermint](https://github.com/tendermint/tendermint)
- [Cosmos](https://cosmos.network/)


## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)