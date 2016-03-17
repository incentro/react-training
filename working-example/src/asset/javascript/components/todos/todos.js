import React from 'react';
import Todo from './todo.js';

class Todos extends React.Component {
	constructor(){
		super();
	}
	render() {
		return (
			<ul>
				{
					this.props.todos.map( (todo, index) => {
						return <Todo key={index} todo={todo} deleteTodo={this.props.deleteTodo} />
					})
				}
			</ul>
		);
	}
}

export default Todos;
