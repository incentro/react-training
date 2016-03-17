import React from 'react';

class Todo extends React.Component {
	constructor(){
		super();

		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(){
		this.props.deleteTodo(this.props.todo.id);
	}
	handleClick(){
		this.props.toggleTodo(this.props.todo.id);
	}
	render() {
		return <li style={this.props.todo.done ? {textDecoration: 'line-through'} : null } onClick={this.handleClick}>{this.props.todo.id +' '+ this.props.todo.name} <button onClick={this.handleDelete}>delete</button></li>;
	}
}

export default Todo;
