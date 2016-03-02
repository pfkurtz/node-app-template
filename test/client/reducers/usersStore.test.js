import { expect, AssertionError } from 'chai'

import {
  UPDATE_USERS
} from '../../../src/constants/actions'

import SUT from '../../../src/client/reducers/usersStore'

describe('REDUCER: usersStoreReducer', () => {
  it(`should return {} when called without params`, () => {
    expect(SUT()).to.deep.equal({})
  })

  const validStates = [{}, {'foo':{username:"bar"},'baz':{username:"spaz"}},
    {'garath7000': {username:'garath7000',displayName:"Belgarth The Sorcerer"}}]

  const invalidStates = [-1,0,1,9999999999999999999999.999999,NaN,true,false,null,
    ()=>({}),[]]

  const validPayload = { username: 'garath7000', about: "7000-year-old sorcerer" }

  const validAction = {
    type: UPDATE_USERS, payload: validPayload
  }

  const semiValidAction = {
    type: "SOME_STRING", payload: validPayload
  }

  const invalidActions = [...invalidStates, {}, {type:UPDATE_USERS}]

  validStates.forEach(state => {

    it(`should return an object with '${validAction.payload.username}' key, and the props from the payload extended over the props from the state`, () => {
      const result = SUT(state, validAction)
      expect(result[validAction.payload.username]).to.deep.equal(Object.assign(
        {}, state[validAction.payload.username], validAction.payload
      ))
    })

    it(`should just return the same state for any old string`, () => {
      expect(SUT(state, semiValidAction)).to.deep.equal(state)
    })

    invalidActions.forEach(invalidAction => {
      it(`should throw AssertionError with action ${JSON.stringify(invalidAction)}`, () => {
        expect(() => SUT(state, invalidAction)).to.throw(AssertionError)
      })
    })
  })

  invalidStates.forEach(invalidState => {
    it(`should throw AssertionError even with a decent action`, () => {
      expect(() => SUT(invalidState, validAction)).to.throw(AssertionError)
    })
  })

})
