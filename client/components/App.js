import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// take store's state and return props
function mapStateToProps(state) {
  return {
    /**
    * The closer look for the object below is like this:
    *    props.posts: state.posts,
    *    props.comments: state.comments
    */

    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main); // call Main after connect

export default App;
