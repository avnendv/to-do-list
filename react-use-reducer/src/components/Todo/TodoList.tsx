import React, { useReducer, useRef } from 'react';
import reducer, { State, initialState } from '@/store/Todo/reducer';
import { addTodo, deleteTodo, setTodo } from '@/store/Todo/actions';
import { Action } from '@/models/common';
import TodoItem from './TodoItem';

function TodoList(): JSX.Element {
	const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
		reducer,
		initialState
	);
	const inputAddRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTodo(e.target.value));
	};

	const handleAddTodo = () => {
		dispatch(addTodo(state.newTodo));
		dispatch(setTodo(''));
		inputAddRef.current && inputAddRef.current.focus();
	};

	const handleDeleteTodo = (id: number) => {
		dispatch(deleteTodo(id));
	};
	return (
		<div className="container">
			<h1>Todo List</h1>
			<input
				type="text"
				value={state.newTodo}
				ref={inputAddRef}
				onChange={handleInputChange}
			/>
			<button onClick={handleAddTodo}>Thêm</button>
			<ul>
				{state.todos.length ? (
					state.todos.map((todo) => {
						return (
							<TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
						);
					})
				) : (
					<i>Không có danh sách việc cần làm</i>
				)}
			</ul>
		</div>
	);
}

export default TodoList;
