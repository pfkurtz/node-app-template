import r from './index';

export default function insert(table, doc) {
  return r.table(table)
    .insert(doc)
    .run();
}

// insert('users', {
//   username: 'pat',
//   password: 'polgara'
// });
