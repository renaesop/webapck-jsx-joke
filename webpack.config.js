/**
 * Created by fed on 2017/1/16.
 */
const P = require('./webpack-jsx');

const options = {
  entry: './entry.jsx',
  output: {
    path: './dist',
    filename: 'app.jsx',
  },
  plugins: [
    new P(),
  ]
};

module.exports = options;
