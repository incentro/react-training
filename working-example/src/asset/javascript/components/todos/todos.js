import React from 'react';
import Todo from './todo.js';

class Todos extends React.Component {
	constructor(){
		super();
	}
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) => <Todo key={index} todo={todo} toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo} />)}
			</ul>
		);
	}
}

export default Todos;
