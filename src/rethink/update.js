import { expect } from 'chai';
import r from './index';

 /**
  * Promise for a document update in RethinkDB.
  * @param  {string} table - table name
  * @param  {string} id - document id
  * @param  {object} data - field to update
  * @return {Promise} - update() Promise
  */
export default function update(table, id, data) {
  return r.table(table)
    .get(id)
    .update(data)
    .run();
}

// update('users', "6cf2a892-616f-4822-823f-5a17c74c7f02", {
//   password: "belgarath"
// })
// .then(result => {
//   console.log("UPDATE RESULT", result);
// })
// .catch(err => {
//   console.log("UPDATE ERROR", err);
// });
