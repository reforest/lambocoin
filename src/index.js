import lotion from 'lotion';
import coins from 'coins';

const PORT = 3000;
const app = lotion({ initialState: {} });

app.use(coins({
  name: 'kittycoin',
  initialBalances: {
    andy: 100000
  }
}));

// console.log(Object.keys(app));

app.listen(PORT).then(() => {
  console.log(`Coin availabled on PORT ${PORT}`);
});
