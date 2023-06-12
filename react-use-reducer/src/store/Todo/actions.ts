import { Action, Payload } from '@/models/common';
import { ADD_TODO, DELETE_TODO, SET_TODO } from './constants';

export const setTodo = (payload: Payload): Action => {
	return {
		type: SET_TODO,
		payload,
	};
};

export const addTodo = (payload: Payload): Action => {
	return {
		type: ADD_TODO,
		payload,
	};
};

export const deleteTodo = (payload: Payload): Action => {
	return {
		type: DELETE_TODO,
		payload,
	};
};
