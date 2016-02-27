import { forEach } from 'lodash'
import * as listeners from './listeners'
import * as streams from '../data/streams'

import { UPDATE_USER } from '../constants/actions'

/**
 * Sets up a scSocket instance.
 * @TODO unit tests with mocks.
 * @param  {object} scSocket - SocketCluster server socket instance
 * @return {undefined} NA
 */
export default function socket(scSocket) {
  const initialAuthToken = scSocket.getAuthToken()
  console.log("got a connection:", initialAuthToken ?
    initialAuthToken.username : " Somebodye, dunnowhoo")

  // Initialize all the event listeners for the scSocket
  // @TODO own module
  forEach(listeners, listener => {
    scSocket.on(listener.action, listener(scSocket))
  })

  // @TODO own module
  // this architecture will be in flux as use cases explored
  // but at least the streams are subscribed-to
  forEach(streams, stream => {
    // We use Promise syntax to handle because these are RethinkDB changefeeds
    // @TODO we really want to add/remove from a list of streams,
    // as requested, provided authentication
    stream()
    .then(cursor => cursor.each(handleCursorLookup))
    .catch(err => console.log(err))

    function handleCursorLookup(err, data) {
      if (err) console.error(err)
      console.log("DATA", data.new_val)
      scSocket.emit(stream.actionType, data.new_val)
    }
  })

  // channels (chat) (own module)

}
