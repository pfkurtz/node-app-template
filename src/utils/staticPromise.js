/**
 * For when you need to return a Promise,
 * but there's nothing to wait for.
 * @param  {*} value [description]
 * @return {Promise} - Promise for `value`
 */
export default function staticPromise(value) {
  return new Promise(resolve => resolve(value));
}
