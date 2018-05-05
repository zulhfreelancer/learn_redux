// state MUST be the first argument and action always the second argument
function comments(state = [], action) {
  console.log(action, state);
  return state;
}

export default comments;
