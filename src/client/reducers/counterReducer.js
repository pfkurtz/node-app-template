export default function count(
  state = 0,
  action = { type: undefined }
) {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  return state
}
