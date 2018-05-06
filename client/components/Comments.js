import React from 'react';

const Comments = React.createClass({
  renderComment(comment, index) {
    return(
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },

  handleSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
  },

  render() {
    const {postComments} = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment)}

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Comment" />
          <input type="submit" hidden /> {/* to make Enter key to work, we need input type submit */}
        </form>
      </div>
    )
  }
});

export default Comments;
