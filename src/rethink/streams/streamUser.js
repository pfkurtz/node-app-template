import { expect } from 'chai';
import r from './index';

/**
 * Promise for a document stream in RethinkDB.
 * @param  {string} id - user doc id
 * @return {Promise} - user stream
 */
export default function streamUser(id) {
  // @TODO expect
  return r.table(id)
    .get(id)
    .changes({ includeInitial: true })
    .run();
}
