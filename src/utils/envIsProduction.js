import { PROD } from '../constants/env';

/**
 * Checks whether NODE_ENV is 'production'
 * @return {[type]} [description]
 */
export default function envIsProduction() {
  return process.env.NODE_ENV === PROD;
}
