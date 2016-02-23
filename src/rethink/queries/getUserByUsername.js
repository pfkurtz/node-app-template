import r from '../';
import envIsProduction from '../../utils/envIsProduction';
import expectString from '../../expectations/expectString';

/**
 * Get Promise for User doc from RethinkDB, looked up by username.
 * @param  {string} username - identifier for query
 * @return {Promise} user doc
 */
export default function getUserByUsername(username) {
  if (!envIsProduction()) {

  }
}
