import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">ReduxGram</Link>
        </h1>

        {/* pass all props to PhotoGrid component */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
