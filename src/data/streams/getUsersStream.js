import usersStream from '../../rethink/streams/usersStream'
import envIsProduction from '../../utils/envIsProduction'
import expectString from '../../expectations/expectString'
import { UPDATE_USER } from '../../constants/actions'

/**
 * Promise to get a user document from rethink with changes().
 * @param  {string} identifier - id, username, or email
 * @return {Promise} Promise for user doc
 */
export default function getUsersStream() {
  return usersStream()
}

getUsersStream.action = UPDATE_USER
