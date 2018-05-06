// state MUST be the first argument and action always the second argument
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

// https://redux.js.org/basics/reducers#splitting-reducers
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return new state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }

  return state;
}

export default comments;
