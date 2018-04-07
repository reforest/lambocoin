import lotion from 'lotion';
import handler from './handler';

class App {
  constructor() {
    this.app = lotion({ initialState: {} });
    console.log('\x1b[33m[lambocoin]\t initialized...\x1b[0m');
  }
  listen(_port) {
    this.app.use(handler);
    this.app.listen(_port).then(() => {
      console.log(`\x1b[32m[lambocoin]\t available on PORT ${_port}\x1b[0m`);
    });
  }
}

export default App;