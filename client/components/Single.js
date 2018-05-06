import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const {posts, params} = this.props;
    const {postId} = params;
    const index = posts.findIndex((post) => post.code === postId);
    const post = posts[index];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
});

export default Single;
