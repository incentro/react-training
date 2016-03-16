// Seperate the interface into multiple components
// Seperation of concerns by components and not by style and interactivity
var Avatar = React.createClass({
  getInitialState: function() {
    return {
      pagename: 'Incentro'
    }
  },

  // Pass down a function to handle changes down the DOM
  handleUserInput: function(pagename) {
    this.setState({
      pagename: pagename
    });
  },

  render: function() {
    return (
      <div>
        <PagePic pagename={this.state.pagename} />
        <PageLink pagename={this.state.pagename} />
        {/* Pass down the handleUserInput to the child component to handle the search */}
        <SearchBar pagename={this.state.pagename} onUserInput={this.handleUserInput}/>
      </div>
    );
  }
});

var SearchBar = React.createClass({

  // Create a function that catches the value of the input and passes it back up to where the state needs to be changed
  handleChange: function() {
    this.props.onUserInput(
      this.refs.searchbar.value
    );
  },
  render: function() {
    return (
      <input type="text" value={this.props.pagename}  ref="searchbar" onChange={this.handleChange}/>
    );
  }
});


// Multiple components with their own render functions
var PagePic = React.createClass({
  render: function() {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    );
  }
});

// Props are used to pass down data to child components
var PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});


ReactDOM.render(<Avatar/>, document.body);
