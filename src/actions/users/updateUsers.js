export default function(userDoc) {
  // expect object

  return {
    type: UPDATE_USERS,
    payload: userDoc
  }
}
