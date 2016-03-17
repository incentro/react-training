import React from 'react';
import ReactDom from 'react-dom';

import Todos from './components/todos/todos.js';

import TodoStore from './reducers/reducer.todos.js';

import Add from './components/add/add.js';

class App extends React.Component {
	constructor(){
		super();

		this.state =  TodoStore.getState();

		this.addTodo = this.addTodo.bind();

		this.resetState = this.resetState.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		TodoStore.subscribe(this.resetState);
	}
	addTodo(value){
		TodoStore.dispatch({
			type : 'ADD_TODO',
			payload : value
		});
	}
	deleteTodo(value){
		TodoStore.dispatch({
			type : 'DELETE_TODO',
			payload : value
		});
	}
	resetState(){
		let {todos} = TodoStore.getState();
		this.setState({
			todos
		});
	}
	render() {
		return (
			<div>
				<h1>Hoi weweeeeere</h1>
				<Add addTodo={this.addTodo}/>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'));

export default App;
