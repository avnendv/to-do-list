import { ADD_TODO, DELETE_TODO } from '../constants';
import { TodoAction, TodoState } from '../types/todo';

const initialState: TodoState = {
	todos: [],
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [...state.todos, action.payload],
			};
		case DELETE_TODO:
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
};

export default todoReducer;
