import lotion from 'lotion';
import handler from './handler';
// import genesis from './genesis';
import data from './data.json';

class App {
  constructor() {
    this.app = lotion({ 
      devMode: true,
      initialState: {
        ...data
      }
    });
    console.log('\x1b[33m[lambocoin]\t initialized...\x1b[0m');
  }
  listen(_port) {
    return new Promise((resolve, reject)=>{
      this.app.use(handler);
      this.app.listen(_port).then(() => {
        console.log(`\x1b[32m[lambocoin]\t available on PORT ${_port}\x1b[0m`);
        resolve(true)
      });
    })
  }
}

export default App;