import lotion from 'lotion';
import handler from './handler';

function App(PORT) {
  const app = lotion({ initialState: {} });

  app.use(handler);

  app.listen(PORT).then(() => {
    console.log(`\x1b[33m[chain]\t lambocoin availabled on PORT ${PORT}\x1b[0m`);
  });
}

export default App;