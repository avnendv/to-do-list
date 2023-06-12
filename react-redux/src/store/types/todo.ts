import { ADD_TODO, DELETE_TODO } from '../constants';

export interface Todo {
	id: number;
	title: string;
}

export interface TodoState {
	todos: Todo[];
}

interface AddTodoAction {
	type: typeof ADD_TODO;
	payload: Todo;
}

interface DeleteTodoAction {
	type: typeof DELETE_TODO;
	payload: number;
}

export type TodoAction = AddTodoAction | DeleteTodoAction;
