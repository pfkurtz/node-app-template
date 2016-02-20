import { expect } from 'chai';

import r from './index';
import { USERS_TABLE } from '../../common/constants/tables';
import { PROD } from '../../common/constants/env';

/**
 * Promise for a document stream in RethinkDB.
 * @param  {string} id - user doc id
 * @return {Promise} - user stream
 */
export default function streamUser(id) {
  if (process.env.NODE_ENV !== PROD) {
    expect(id).to.be.a('string');
  }

  return r.table(USERS_TABLE, id)
  .get(id)
  .changes({ includeInitial: true })
  .run();
}
