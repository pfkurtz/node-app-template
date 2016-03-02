import { expect, AssertionError } from 'chai';
import { forEach } from 'lodash'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../../src/constants/actions';
import { LOGIN_FAILURE } from '../../../src/constants/failures'

// system under test
import SUT from '../../../src/client/reducers/currentUser';

describe('REDUCER: currentUser', () => {
  const actionTypesThatReturnNull = [LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT]

  const goodLoginState = { username: 'Ce\'Nedra' }

  const goodLoginSuccessAction = {
    type: LOGIN_SUCCESS,
    payload: goodLoginState
  }

  const goodUpdatePayloads = [
    { username: 'Ce\'Nedra', byline: 'Imperial Princess of Tolnedra' },
    {
      username: 'silk',
      displayName: 'Kheldar, Prince of Drasnia',
      emails: [{ address: 'silk@drasnianthrone.dr', verified: true  }]
    },
    { username: 'davideddings', about: 'Belgariad Author' }
  ]

  const badUpdataPayloads = [
    { displayName: 'Belgarion, the Godslayer, Overlord of the West' },
    /*{ username: 'salmissra', password: 42 }, @TODO restore this when validation ready */
    { author: 'David Eddings' }
  ]

  const badPayloads = [
    -1, 0, 1, true, false, null, undefined, 'foo', () => {}, {}, [],
    [...actionTypesThatReturnNull], [goodUpdatePayloads],
    ...badUpdataPayloads
  ]

  /* @TODO non-FSA throws error */

  // LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT
  // always return null
  actionTypesThatReturnNull.forEach(type => {
    badPayloads.forEach(state => {
      it(`should return null for ${type} no matter what the state param`, () => {
        expect(SUT(state, { type })).to.be.null
      })
    })
  })

  // LOGIN_SUCCESS
  // NB badStates includes badUpdataPayloads
  badPayloads.forEach(payload => {
    it(`should throw AssertionError for ${LOGIN_SUCCESS} with invalid payload ${JSON.stringify({payload})}`, () => {
      expect(() => SUT(null, { type: LOGIN_SUCCESS, payload }))
        .to.throw(AssertionError)
    })
  })

  it(`should return { username } for good ${LOGIN_SUCCESS}, without regard for prior state`, () => {
    expect(SUT([...badPayloads, ...goodUpdatePayloads], goodLoginSuccessAction))
      .to.equal(goodLoginState)
  })

  // UPDATE_USER

  const spread = [...badPayloads, ...badUpdataPayloads, ...goodUpdatePayloads]
  spread.forEach(payload => {
    it(`should return null no matter what the payload for ${UPDATE_USER} if no current user`, () => {
      expect(SUT(null, { type: UPDATE_USER, payload })).to.be.null
    })
  })

  badUpdataPayloads.forEach(payload => {
    it(`should throw AssertionError for ${UPDATE_USER} with bad payload: ${JSON.stringify(payload)}`, () => {
      expect(() => SUT({}, { type: UPDATE_USER, payload })).to.throw(AssertionError)
    })
  })

  goodUpdatePayloads.forEach(payload => {
    const target = SUT({}, { type: UPDATE_USER, payload })
    it(`should return an object for ${UPDATE_USER} with current user in state`, () => {
      expect(target).to.be.an('object')
    })

    forEach(payload, (v, k) => {
      it(`should return object with { ${k}: ${v} } extended from (good) payload ${JSON.stringify(payload)}`, () => {
        expect(target[k]).to.equal(v)
      })
    })
  })
})
