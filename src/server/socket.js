import { forEach } from 'lodash';
import * as listeners from './listeners';

import getUsersStream from '../data/getUsersStream';
import { UPDATE_USER } from '../constants/actions';

/**
 * Sets up a scSocket instance.
 * @TODO unit tests with mocks.
 * @param  {object} scSocket -
 * @return {undefined} NA
 */
export default function socket(scSocket) {
  const initialAuthToken = scSocket.getAuthToken();
  console.log("got a connection:", initialAuthToken ?
    initialAuthToken.username : " Somebodye, dunnowhoo");

  // Initialize all the event listeners for the scSocket
  forEach(listeners, listener => {
    scSocket.on(listener.eventName, listener(scSocket));
  });

  getUsersStream()
  .then(cursor => {
    console.log("here", JSON.stringify(cursor._data[0]));

    return cursor.each((err, item) => {
      if (err) console.warn(err);
      return emitIt(item.new_val);
    });
  })
  .catch(err => {
    console.log(err);
  });

  function emitIt(data) {
    console.log("EMIT IT:", data);
    scSocket.emit(UPDATE_USER, data);
  }

  // @TODO
  // database streams
  // channels (chat)

}

// import { map } from 'lodash';
