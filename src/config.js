import path from 'path';
require('dotenv').config({path: path.resolve(__dirname, '.env')})
export default {
  APP_GCI: process.env.APP_GCI,
  INITIAL_WALLETS: {
    '6ZbRYV2f1NNuNQ9FDYyUMC2d1cjG2goWa': 0,
    '94sjtY7LtC3P886FTepA5Q42VGqotbQfa': 100,
    '6VD36a9t4DJRbY7WzjPuRRqDfEo8CpTHk': 200,
    'LQbFPTBca2c55WWRH1cVdq8qcLhgbBSTV': 300,
    'AYiagTrfG3nE9aFJALVTX6Pkn3CH28pTw': 400
  }
}