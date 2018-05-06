import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts: posts,
  comments: comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// hot-reload reducer changes
if (module.hot) {
  module.hot.accept('./reducers/', function() {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
