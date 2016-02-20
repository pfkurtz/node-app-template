import { expect } from 'chai';
import r from './index';

/**
 * Promise for a document deletion in RethinkDB.
 * @param  {string} table - table name
 * @param  {string} id - document id
 * @return {Promise} - delete() Promise
 */
export default function _delete(table, id) {
  return r.table(table)
    .get(id)
    .delete()
    .run();
}

// _delete('users', "387bf95b-e7a2-4a08-af79-1b05124df6db", (err, result) => {
//   console.log(err, result);
// });
