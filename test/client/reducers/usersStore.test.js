import { expect, AssertionError } from 'chai'

import {
  UPDATE_USERS
} from '../../../src/constants/actions'

import SUT from '../../../src/client/reducers/usersStore'

describe('REDUCER: usersStoreReducer', () => {
  it(`should return {} when called without params`, () => {
    expect(SUT()).to.deep.equal({})
  })
})
