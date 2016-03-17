import React from 'react';

import TodoStore from '../../reducers/reducer.todos.js';

class Todo extends React.Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		TodoStore.dispatch({
			type : 'TOGGLE_TODO',
			payload : this.props.todo.id
		});
	}
	render() {
		return <li onClick={this.handleClick}>{this.props.todo.id +' '+ this.props.todo.name}</li>;
	}
}

export default Todo;
