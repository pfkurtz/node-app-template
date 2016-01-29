export default function app(state = {count:0}, action) {
  console.log("app reducer!", state, action);
  if (action.type === 'ADD_COUNT') {
    const count = state.count + 1;
    console.log("in ADD_COUNT", count, state.count);
    const newState = Object.assign({}, state, { count });
    console.log("NEWVAL", newState);
    return newState;
  }
  return state;
}
