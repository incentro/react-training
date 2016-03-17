// 2. JSX
var name = 'Incentro';

var disabled = false;

var todos = [
  'learn react',
  'learn webpack',
  'learn redux'
];

var objectSpread = {
	className: 'fancy-pancy-paragraph',
	id: 'nice'
};

var HelloWorld = React.createClass({
  render: function() {
    return (
      // Gotchas on class and for => className and htmlFor
      // Use curly braces (block scoping) to use javascript expressions
      <div>
        <p className="fancy-pancy-paragraph">{name} {name === 'Incentro' ? <input value={name} disabled={disabled}/> : 'is the best'}</p>

		{/* use map/filter/reduce array functions to render lists */}
        <ul>
          {todos.map(todo => <li>{todo}</li>)}
        </ul>

		{/* use the new object spread operator to assign multiple props or attributes */}
		<div {...objectSpread}>Object spread operator</div>
      </div>
    );
  }
});

ReactDOM.render(<HelloWorld date={new Date()} />, document.body);

// OBJECTIVE
// - Add a default input value to the list
// - Render the todolist items with a map function
