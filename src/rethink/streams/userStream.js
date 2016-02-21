import { expect } from 'chai';

import r from './index';
import { USERS_TABLE } from '../../constants/tables';
import { PROD } from '../../constants/env';

/**
 * Promise for a document stream in RethinkDB.
 * @param  {string} id - user doc id
 * @return {Promise} - user stream
 */
export default function userStream(id) {
  if (process.env.NODE_ENV !== PROD) {
    expect(id).to.be.a('string');
  }

  return r.table(USERS_TABLE, id)
  .get(id)
  .changes({ includeInitial: true })
  .run();
}
