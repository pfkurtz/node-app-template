export default function count(
  state = 0,
  action = { type: undefined }
) {
  console.log("count state", state);
  if (action.type === 'ADD_COUNT') {
    return state + 1;
  }
  return state;
}
