import lotion from 'lotion';
import coins from 'coins';

const PORT = process.argv[2] || 3000;
const app = lotion({ initialState: {} });

app.use(coins({
  name: 'basecoin',
  initialBalances: {	
    andy: 100000
  }	
}));
// console.log(Object.keys(app));

// AYiagTrfG3nE9aFJALVTX6Pkn3CH28pTw: 400,
// 6VD36a9t4DJRbY7WzjPuRRqDfEo8CpTHk: 200,
// 6ZbRYV2f1NNuNQ9FDYyUMC2d1cjG2goWa: 0,
// 94sjtY7LtC3P886FTepA5Q42VGqotbQfa: 100,
// LQbFPTBca2c55WWRH1cVdq8qcLhgbBSTV: 300
app.listen(PORT).then(() => {
  console.log(`\x1b[33m[chain]\t Coin availabled on PORT ${PORT}\x1b[0m`);
});
