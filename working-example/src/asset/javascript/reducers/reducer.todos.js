import {createStore} from 'redux';

const INITIAL_STATE = {
	todos: [
		{
			name : "To do nummer 1",
			id : 0,
			done : false
		}
	]
};

const TodoReducer  =  (state = INITIAL_STATE , action ) => {
	switch(action.type){
		case 'ADD_TODO':
			return {
				... state,
				todos : [
					... state.todos,
					{
						name : action.payload,
						id : state.todos.length,
						done : false
					}
				]
			};
		break;
		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
			};
		break;
		default:
			return state;
	}
}

const TodoStore = createStore(TodoReducer);

export default TodoStore;
