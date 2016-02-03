export function count(
  state = 0,
  action = { type: undefined }
) {
  if (action.type === 'ADD_COUNT') {
    return state + 1;
  }
  return state;
}
