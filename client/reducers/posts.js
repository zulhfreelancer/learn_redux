/**
* A reducer takes in 2 things:
*    1. the action (information about what happened)
*    2. the copy of current state
*
* A reducer takes in current state, process it and return a new state
*/

function posts(action, state = []) {
  console.log(action, state);
  return state;
}

export default posts;
