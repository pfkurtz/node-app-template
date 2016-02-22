import { forEach } from 'lodash';
import * as listeners from './listeners';

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

  console.log(listeners);

  forEach(listeners, listener => {
    scSocket.on(listener.eventName, listener(scSocket));
  });

}
