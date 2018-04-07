import lotion from 'lotion';
import handler from './handler';

function App(PORT=3000) {
  const app = lotion({ initialState: {} });
  console.log('\x1b[33m[lambocoin]\t initialized...\x1b[0m');

  app.use(handler);

  app.listen(PORT).then(() => {
    console.log(`\x1b[32m[lambocoin]\t available on PORT ${PORT}\x1b[0m`);
  });
}

export default App;