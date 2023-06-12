import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { Todo } from '@/store/types/todo';
import { RootState } from '@/store/reducers';
import { addTodo, deleteTodo } from '@/store/reducers/todo';

function TodoList(): JSX.Element {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState<string>('');
	const inputAddRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleAddTodo = () => {
		const newId = todos.length + 1;
		if (newTodo.trim() !== '') {
			const newTodoItem: Todo = {
				id: newId,
				title: newTodo,
			};
			dispatch(addTodo(newTodoItem));
			setNewTodo('');
			inputAddRef.current && inputAddRef.current.focus();
		}
	};

	const handleDeleteTodo = (id: number) => {
		dispatch(deleteTodo(id));
	};
	return (
		<div className="container">
			<h1>Todo List</h1>
			<input
				type="text"
				value={newTodo}
				ref={inputAddRef}
				onChange={handleInputChange}
			/>
			<button onClick={handleAddTodo}>Thêm</button>
			<ul>
				{todos.length ? (
					todos.map((todo) => {
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
