import { PROD } from '../../constants/env';

if (process.env.NODE_ENV === PROD) {
  module.exports = require('./App/App.prod');
} else {
  module.exports = require('./App/App.dev');
}
