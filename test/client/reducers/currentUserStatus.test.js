import { expect, AssertionError } from 'chai'

import SUT from '../../../src/client/reducers/currentUserStatus'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_STATUS
} from '../../../src/constants/actions'
import { LOGIN_FAILURE } from '../../../src/constants/failures'

describe("REDUCER: currentUserStatus", () => {
  it(`should return ${LOGOUT} with no params`, () => {
    expect(SUT()).to.equal(LOGOUT)
  })

  const validPayloads = [LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]
  const validStates = validPayloads

  const validActions = validPayloads.map(payload => ({
    type: SET_USER_STATUS,
    payload
  }))

  const semiValidActions = validPayloads.map(payload => ({
    type: 'SOME_OTHER_STRING',
    payload
  }))

  const invalidStates = [-1,0,1,9999999999999999999999.999999,NaN,true,false,null,()=>({}),{},validPayloads,[]]

  const invalidPayloads = [...invalidStates,undefined,'OTHER_STRING',
    'AND_ANOTHER_ONE','free form string!']

  const invalidActions = [
    invalidPayloads.map(payload => ({
      type: SET_USER_STATUS,
      payload
    })),
    invalidPayloads.map(payload => ({
      type: 'FOR_GOOD_MEASURE',
      payload
    })),
    ...invalidPayloads // just to throw a bunch more values at it
  ]

  const validParamSets = createParamSets(validStates, validActions)

  validParamSets.forEach(params => {
    it(`should return ${params.action.payload} when type is ${SET_USER_STATUS}`, () => {
      expect(SUT(params.state, params.action)).to.equal(params.action.payload)
    })
  })

  const semiValidParamSets = createParamSets(validStates, semiValidActions)

  semiValidParamSets.forEach(params => {
    it(`should return ${params.state} if ${JSON.stringify(params.action)} doesn't have type ${SET_USER_STATUS}`, () => {
      expect(SUT(params.state, params.action)).to.equal(params.state)
    })
  })

  const invalidParamSets = createParamSets(invalidStates, invalidActions)

  invalidParamSets.forEach(params => {
    it(`should throw AssertionError with ${JSON.stringify(params.state)} and ${JSON.stringify(params.action)}`, () => {
      expect(() => SUT(params.state, params.action)).to.throw(AssertionError)
    })
  })
})

function createParamSets(array1, array2) {
  const returnVal = []

  array1.forEach(el1 => {
    array2.forEach(el2 => {
      returnVal.push({ state: el1, action: el2 })
    })
  })

  return returnVal
}
