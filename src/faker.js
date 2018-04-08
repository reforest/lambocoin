const fs = require('fs');
const path = require('path');
function uuid() {
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = (c === 'x') ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// for(let i=0;i<30;i++){
//   console.log(uuid())
// }

const users = [
  '343d8c09edb7d464fa3a8324b46a84eb0234bfe08379367f097f035088723abe0f',
  'a93ab8c2c047aa78e71bb39ead17b1becb9d6846988f5441644d0afbd0f18d085c',
  '76f08f620778303ccbf9316a3b346caffb4827694959865b4d43ed694bc5562b2f',
  '0ceab9e0cdd7f4387ea464370c3412b6c2c399015834caf7b01514efd14e2743f0',
  'ee63d18fc89a5ca5f3a9eab7cd48b12fa8eeda0d4988874fc3f3932dfb4373477a',
  '66da64a714bd24720c2d6c7c79a1f3d1db777e4d437d1b2e072e8262865144d914',
  '7045683a4843a7fdc8a7e47a5a06721ca98833a02a78d7bb4e24fcabf7fb9cd28a',
  'd363b6351488cdf2050b1b47b49cc5157836fea96ac99359056269eac13f4d5826',
  '6d6311c8c5c12db0188d77edd0e4ce0261a0ad6cba1b739b05cb307dd4123c4096',
  '8001f1fd9ea4c165a98f2113512e90e380715e10b2984575305b8b056c3670e6f6',
  '604dcd9b527659c634bfb3a49e021c375baf7b5f1cb484702be9e01bf67b2458c8',
  '75134711fe6bfcc9769a90aba3fa542dd815269be8d286beefe1362314464864bd',
  '923d7b7ae2c785d7de2f22ab1e179488833a76721104161cb5a9467094bab83a2b',
  'cb42a49cd43832ef9aa0a204911b6bcbc5d8d11dd5b556b688666d9bce131e675f',
  '70d1216c547baeb2c14ae8a5307e7127c8b17fedd05572af3b5d75504609520cd7',
  'a6e23cd1afccff851f83254ef42e2336f69a9912671b7112466e3dcd9f90bc0de9',
  'ae69d495a890174dfb7c891b180e378deb44c94e9d2dde55affcf2ae797d6cafe5',
  '6e2b64c4014a426954a604e2c6b35b6b635000b181520377b90602a55c84b06d60',
  '8e6043dead13c1bab3112a436321be5d2267767367d69e677f0e5639358982869c',
  '136d8b9e0305a0feb0936099ab4aaf8fe400f78335a13878671046323ebef1b139',
  'c9f889100fb06ed43b3e24f0e935078042d8830a253b52c6a9f8ac2acaaa7ee7ea',
  '4ce05dcc29c91c0fc363a9de56c3f1019926c16af3dee6e9cf5377737ee9a88015',
  '680688c697f2dc362829631f69a563c3d258442dc25a3bc97c369422304ccf286f',
  'c808fc5832afb9775da3e921e75e8c477a24da7e6b425243ca9025a697b0b59a46',
  'e4b795edb0efb9e1bc1b4a82b61f0e6d8804d3cf0fe1159e3c5f68fb6fb62379a6',
  '2039287df9227b3b3d9b5babe33f05ed92387f905a54f70accc9a313ad30688edc',
  '56b1fd2ea8db5d778f001a65bd9a0c4b8d9373dc06afdcaeecd6160cce94378443',
  '7253de95375855edf4f40a634414493d859ef6bd22283978fce2efdddef7fd157c',
  '52255e7126d4b05c9e805b0754bde660e02ea5d8421f9099910d0fbe55c6083099',
  '0af29e45581a05fa9b67935044603a1ac264fcdc93994160450493d31bd1c6b49b',
  'c62f2c6796169816fbeca925e5f08a6d8e5f378bb7d707911d4370ac31356f2290',
  '2c5ad83089f67526f19b2f6bd8335b25abfa25ff705d11a69df063cb7011344128',
  '3437cba093c8f2fca24c11b8083789bd43844c218e855451e1f44f2723437dfcdd',
  '7ef57c95889f24b8df1ea1cc86f8b3c3cdf13f7fb53e2024a0ca152cceec81be1d',
  '985123a37951689c62625511a2a76ce486a8fbf8fd7b2a2c1b38459b5ffd9a8d50',
  '7ab9611f427f1372ddf8febd9e9a5a9ab9485f524e56d91870fd00b8566b1100ea',
  'c3e663224ff06a2a3252208485c4353b44f2f4e1ef63d9540bbce366ac1a07e1e9',
  '1ae868a0f322ca12090f92d9610e46772c15c90b1528b3ae6a160375834a7ea1af',
  'fc0dc9c5e9af82995f7cb0bcf62f1710572c6ecb116aaa3f8c2955fc73780ff1d3',
  'ed695642b934ba90182a296eb6a6c6c14347e3280694d46b1b87b576111c7f90af',
  '9c53992ef81796befa3ead80fcfb4294feae6f05f8b1dc60d9586ff1ee8229879f',
  '8e987187befcc36589148c4b93fa7c5e173539fceb57a2b03d75371df9d96cc4f3',
  '6d0a8e4ded944b6b00e105b6db8503806335791c93a40c004dd4b0bb8efc1ace07',
  '25d8f8996a77fa560788b000f7159dffad4a77bf031a99446378cf576f8c344f60',
  '965ac359fc5509da22cff2dceb058d813bdfc2c62de393ae1a74dc604ef9c84d54',
  'd369396b71f9c4128d67309ebc8551948381d585a40c0c99c63311b7e02c6e38c6',
  'd26cfcd909e309d20ee992e6d88601c56ea29999d2eff312727f4a97b70ff49291',
  '77a7d310e93eea7798cc190efc44fa7653604533142bc04011471e0d153d42ad13',
  '286fe926ebe52c751274ed3e3d5130183a9466c7dc8d8a7ca0592ad8ec52ceb6ca',
  'b0201b2e98d3cda4adab7db59dd2b74db153d5fbd88d28dd53cccab33a3544c389',
  '6139aa6ef43794afa38180bd95b1de4beafd2efa8f9bf0b8b2f5dded28aa01aaeb',
  '23b72706c69458c2b11117da9577dba395faa179f7f95825551869581960d99b2f',
  'ed3fd4b9982fd89b660082c6e98a40bd6ab359e3efed2370a5e6bda04c2da39735',
  '5bcae3abe65a99a9c2e460f2e20ae0db1261a3242aac342f4e17a888ac5c9189e0',
  'bf7054125c5edef405304fcae329c81013011371ccd9df95454add749b1d3478c9',
  '9e9578743e468e66c2eaf489000b81ba9a26c62ce40e3aa246c3fb409f3666a1f4',
  '031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f', // userOne
  'celadon_wallet' // special wallet
]

function randomNum(){
  return Math.floor(Math.random()*users.length);
}

let state = {
  balances: {},
  transactions: []
};

users.forEach(u=>{
  state.balances[u] = Math.floor(Math.random()*100*Math.random()*100);
})

for(let i=0; i<3000;i++){
  let userOne = users[randomNum()];
  let userTwo = users[randomNum()];
  console.log(userOne, userTwo);
  if(userOne !== userTwo){
    let userOneBalance = state.balances[userOne];
    let userTwoBalance = state.balances[userTwo];
    if((userOneBalance<=10)||userTwoBalance<=10) break;

    let amount = Math.random()*((Math.min(userOneBalance, userTwoBalance))/2.4);
    let donations = amount*0.015;
    amount -= donations;

    if(amount>userOneBalance) break;
    userOneBalance-=amount;
    userTwoBalance+=amount;
    state.balances[userOne] = userOneBalance
    state.balances[userTwo] = userTwoBalance
    state.transactions.push({
      timestamp: Date.now() - (Math.floor(Math.random()*i*300)+100),
      from: userOne,
      to: {
        address: userTwo,
        amount
      },
      donations: {
        address: 'celadon_wallet',
        amount: donations
      }
    })
  }
}

const output = JSON.stringify(state, 0, 1);
fs.writeFileSync(path.resolve(__dirname, './data.js'), output)