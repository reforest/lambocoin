import lambocoin from './app';

const App = new lambocoin();
App.listen(process.argv[2]|| 3000);