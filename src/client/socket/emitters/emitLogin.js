import envIsProduction from '../../../utils/envIsProduction';
import expectUserCredentials from '../../../expectations/expectUserCredentials';
import { SOCKET_LOGIN } from '../../../constants/sockets';
import { SOCKET_EMIT_ERROR } from '../../../constants/errors';

/**
 * Return a 'login' handler with `scSocket` dependecy injected.
 * @TODO tests
 * @param  {object} scSocket - SocketCluster client socket
 * @return {function} event handler
 */
export default function emitLogin(scSocket) {
  /* @TODO if (!envIsProduction()) {
    expectScSocket(scSocket);
  } */

  /**
   * Emits SocketCluster 'login' event and awaits response.
   * @param  {object} credentials { username, password } or `null`
   * @return {string|true} failure string or true
   */
  return async function handler(credentials) {
    if (!envIsProduction()) {
      expectUserCredentials(credentials);
    }

    try {
      return await scSocket.emit(SOCKET_LOGIN, credentials);

    } catch (err) {
      console.warn(err);
      return SOCKET_EMIT_ERROR;
    }
  }
}
