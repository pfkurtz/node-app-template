import { PROD } from '../../../common/constants/env';

if (process.env.NODE_ENV === PROD) {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}
