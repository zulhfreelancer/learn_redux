/**
* A reducer takes in 2 things:
*    1. the action (information about what happened)
*    2. the copy of current state
*
* A reducer takes in current state, process it and return a new state
*/

// state MUST be the first argument and action always the second argument
function posts(state = [], action) {
  console.log(action, state);
  return state;
}

export default posts;
