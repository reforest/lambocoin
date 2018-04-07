import lotion from 'lotion';
import { handler } from './index';

const PORT = process.argv[2] || 3000;
const app = lotion({ initialState: {} });

app.use(handler);

app.listen(PORT).then(() => {
  console.log(`\x1b[33m[chain]\t Coin availabled on PORT ${PORT}\x1b[0m`);
});
