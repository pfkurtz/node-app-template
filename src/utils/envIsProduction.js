import { PROD } from '../constants/env'

/**
 * Checks whether NODE_ENV is 'production'
 * @return {boolean} result of check
 */
export default function envIsProduction() {
  return process.env.NODE_ENV === PROD
}
