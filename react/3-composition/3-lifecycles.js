var CommentBox = React.createClass({

  // This function will load the comments from the server using jquery
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  // This function will submit a comment to the server
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  // The comments start as an empty array
  getInitialState: function() {
    return {data: []};
  },

  // When the component mounts we need to fetch a first set of data and start the interval to fetch from the server
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {

    // We map over the passed props to create a list of comments
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    // Render the comments in a div
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({

// Use the marked library to convert a string to markup
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  // DangerouslySetInnerHTML is used to render straight html
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentForm = React.createClass({

  // The initial state is an author and text
  getInitialState: function() {
    return {author: '', text: ''};
  },

  // On changing the author the setstate is triggered
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },

  // On changing he tet the setstate is triggered
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  // On submit the function is passed to the onCommentsubmit prop and is stored as state in the parent component
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.body
);

// OBJECTIVE
// - Take a look at the react docs => http://facebook.github.io/react/docs/getting-started.html
// - Add a jQuery plugin to the page on the right lifeCylce hook of a todo list item
// - Rumble the item as soon as it enters the list => https://jackrugile.com/jrumble/

// <script src="https://npmcdn.com/jrumble@1.3.0"></script>
// Initialise rumble
// $('body').jrumble();
// Start rumble on element
// $('body').trigger('startRumble');
