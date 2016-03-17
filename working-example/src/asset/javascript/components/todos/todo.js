import React from 'react';

import TodoStore from '../../reducers/reducer.todos.js';

class Todo extends React.Component {
	constructor(){
		super();

		this.state =  TodoStore.getState();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		TodoStore.dispatch({
			type : 'TOGGLE_TODO',
			payload : this.props.todo.id
		});
		this.setState(TodoStore.getState());
	}
	render() {
		return <li style={this.state.todos[this.props.todo.id].done ? {textDecoration: 'line-through'} : null } onClick={this.handleClick}>{this.props.todo.id +' '+ this.props.todo.name}</li>;
	}
}

export default Todo;
