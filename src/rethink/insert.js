import { expect } from 'chai'
import r from './index'

/**
 * Promise for a document deletion in RethinkDB.
 * @param  {string} table - table name
 * @param  {object} doc - new document
 * @return {Promise} - insert() Promise
 */
export default function insert(table, doc) {
  return r.table(table)
    .insert(doc)
    .run()
}

// insert('users', {
//   username: 'pat',
//   password: 'polgara'
// })
