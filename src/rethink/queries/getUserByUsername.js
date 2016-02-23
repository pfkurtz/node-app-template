import r from '../';
import envIsProduction from '../../utils/envIsProduction';
import expectString from '../../expectations/expectString';
import { USERS_TABLE } from '../../constants/tables';

/**
 * Get Promise for User doc from RethinkDB, looked up by username.
 * @param  {string} username - identifier for query
 * @return {Promise} user doc
 */
export default function getUserByUsername(username) {
  if (!envIsProduction()) {
    expectString(username);
  }

  return r.table(USERS_TABLE)
    /* @TODO we need an index on username field */
    .filter({ username })
    .run();
}
