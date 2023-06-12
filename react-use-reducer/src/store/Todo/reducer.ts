import { Action, Todo } from '@/models/common';
import { ADD_TODO, DELETE_TODO, SET_TODO } from './constants';

export interface State {
	todos: Todo[];
	newTodo: string;
}

export const initialState: State = {
	todos: [],
	newTodo: '',
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case SET_TODO:
			return { ...state, newTodo: action.payload as string };
		case ADD_TODO:
			if (state.newTodo.trim() !== '') {
				const newId = state.todos.length + 1;
				const newTodoItem: Todo = {
					id: newId,
					title: state.newTodo.trim(),
				};
				return {
					todos: [...state.todos, newTodoItem],
					newTodo: '',
				};
			}
			return state;
		case DELETE_TODO: {
			const updateTodos = state.todos.filter(
				(todo) => todo.id !== +action.payload
			);
			return {
				...state,
				todos: updateTodos,
			};
		}
		default:
			return state;
	}
};

export default reducer;
