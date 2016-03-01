import { expect, AssertionError } from 'chai';

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
  const actionsThatReturnNull = [LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT]

  const goodLoginState = { username: 'Ce\'Nedra' }

  const goodLoginSuccessAction = {
    type: LOGIN_SUCCESS,
    payload: goodLoginState
  }

  const goodUpdateStates = [
    { username: 'Ce\'Nedra', byline: 'Imperial Princess of Tolnedra' },
    {
      username: 'silk',
      displayName: 'Kheldar, Prince of Drasnia',
      emails: [{ address: 'silk@drasnianthrone.dr', verified: true  }]
    },
    { payload: { username: 'davideddings', about: 'Belgariad Author' } }
  ]

  const badUpdataPayloads = [
    { displayName: 'Belgarion, the Godslayer, Overlord of the West' },
    { username: 'salmissra', password: 42 },
    { author: 'David Eddings' }
  ]

  const badStates = [
    -1, 0, 1, true, false, null, undefined, 'foo', () => {}, {}, [],
    [...actionsThatReturnNull], [goodUpdateStates],
    ...badUpdataPayloads
  ]

  actionsThatReturnNull.forEach(action => {
    badStates.forEach(state => {
      it(`should return null for ${action} no matter what the state param`, () => {
        expect(SUT(state, { type: action })).to.be.null
      })
    })
  })

  goodUpdateStates.forEach(state => {
    // NB badStates includes badUpdataPayloads
    badStates.forEach(payload => {
      it(`should throw AssertionError for ${LOGIN_SUCCESS} with invalid payload ${JSON.stringify({payload})}`, () => {
        expect(() => SUT(state, { type: LOGIN_SUCCESS, payload }))
          .to.throw(AssertionError)
      })
    })
  })

  it(`should return { username } for good ${LOGIN_SUCCESS}, without regard for prior state`, () => {
    expect(SUT([...badStates, ...goodUpdateStates], goodLoginSuccessAction))
      .to.equal(goodLoginState)
  })

  /* @TODO props from new userDoc copied extended over old userDoc onto {} */
})
