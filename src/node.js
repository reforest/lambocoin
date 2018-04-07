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

app.listen(PORT).then(() => {
  console.log(`\x1b[33m[chain]\t Coin availabled on PORT ${PORT}\x1b[0m`);
});
