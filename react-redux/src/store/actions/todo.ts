import { ADD_TODO, DELETE_TODO } from '../constants';
import { TodoAction, Todo } from '../types/todo';

export const addTodo = (todo: Todo): TodoAction => ({
	type: ADD_TODO,
	payload: todo,
});

export const deleteTodo = (id: number): TodoAction => ({
	type: DELETE_TODO,
	payload: id,
});
