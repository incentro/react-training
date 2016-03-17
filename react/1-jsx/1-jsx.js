// 1. JSX

// React is used to create and maintain the a representation of data (in this case it uses the DOM)
// React works with components
// Every part of the page is a component in the same way you will think of components using CSS
const HelloWorld = React.createClass({

  // The Render function is the piece of the React API that will turn javascript into HTML
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()} <NonJSX />
      </p>
    );
  }
});

// JSX makes that you can write your HTML in a familiar way
const NonJSX = React.createClass({
  render: () =>
    React.createElement('a', {href: 'https://facebook.github.io/react/'}, 'Hello!')
});

// React is seperate to the ReactDom library
// In this case we're using the DOM to display our data
// But we could easily take something else like canvas, webGL or any other format to render our JSX

// The setInterval will run the ReactDOM.render function every .5 seconds and it will use a smart diffing algorithm to calculate the minimal mutation
setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.body
  );
}, 500);

// OBJECTIVE:
// - Build a TODO list app withouth any logic
// - Use pure JSX to build a DOM tree out of a single component
