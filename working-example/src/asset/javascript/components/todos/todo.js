import React from 'react';

import TodoStore from '../../reducers/reducer.todos.js';

class Todo extends React.Component {
	constructor(){
		super();

		this.state =  TodoStore.getState();
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(){
		this.props.deleteTodo(this.props.todo.id);
	}
	handleClick(){
		TodoStore.dispatch({
			type : 'TOGGLE_TODO',
			payload : this.props.todo.id
		});
		this.setState(TodoStore.getState());
	}
	render() {
		return <li style={this.props.todo.done ? {textDecoration: 'line-through'} : null } onClick={this.handleClick}>{this.props.todo.id +' '+ this.props.todo.name} <button onClick={this.handleDelete}>delete</button></li>;
	}
}

export default Todo;
