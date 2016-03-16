// State is used to change the representation of a component
var LikeButton = React.createClass({
  // Get initial state creates the state object
  getInitialState: function() {
    return {liked: false};
  },

  // HandleClick will change the state of a component with the setState function
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';

    // Event handlers are added inside the JSX using camelCase versions
    // Events are handled in a super efficient way by React
    return (
      <p onClick={this.handleClick}>
        You {text} Incentro. Click to toggle.
      </p>
    );
  }
});

// State should contain data that a component's event handlers may change to trigger a UI update

ReactDOM.render(
  <LikeButton />,
  document.body
);
