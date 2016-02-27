import userStream from '../../rethink/streams/userStream'
import envIsProduction from '../../utils/envIsProduction'
import expectString from '../../expectations/expectString'

/**
 * Promise to get a user document from rethink with changes().
 * @param  {string} identifier - id, username, or email
 * @return {Promise} Promise for user doc
 */
export default function getUserStream(identifier) {
  if (!envIsProduction()) {
    expectString(identifier)
  }
  return userStream(identifier)
}
