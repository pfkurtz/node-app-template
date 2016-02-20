import { expect } from 'chai';
import r from './index';

/**
 * Promise for a document get in RethinkDB.
 * @param  {string} table - table name
 * @param  {string} id - document id
 * @return {Promise} - get() Promise
 */
export default function get(table, id) {
  // @TODO expect
  return r.table(table)
    .get(id)
    .run();
}

// get('users',  "6cf2a892-616f-4822-823f-5a17c74c7f02")
// .then(result => {
//   console.log("get result", result);
// });
