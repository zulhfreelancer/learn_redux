/**
* A reducer takes in 2 things:
*    1. the action (information about what happened)
*    2. the copy of current state
*
* A reducer takes in current state, process it and return a new state
*/

// state MUST be the first argument and action always the second argument
function posts(state = [], action) {
  // all reducers get called, we need to filter what we actually want
  switch (action.type) {
    case 'INCREMENT_LIKES':

      // because we're using flat file and not real database,
      // let's copy all objects before and after the one that we're updating,
      // then update the one we want and put back the before and after objects
      const index = action.index;
      return [
        ...state.slice(0, index),  // before the one that we're updating
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1), // after the one that we're updating
      ]
    default:
      return state;
  }
}

export default posts;
