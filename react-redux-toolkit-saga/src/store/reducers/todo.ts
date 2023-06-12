import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../types';

const initialState: TodoState = {
	todos: [],
	loading: false,
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		addTodo: (state, _action: PayloadAction<Todo>) => {
			state.loading = true;
		},
		addTodoSuccess: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
			state.loading = false;
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, addTodoSuccess, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
