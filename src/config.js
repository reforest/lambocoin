import path from 'path';
require('dotenv').config({path: path.resolve(__dirname, '.env')})
export default {
  APP_GCI: process.env.APP_GCI
}