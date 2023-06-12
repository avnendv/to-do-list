import React, { useRef, useState } from 'react';
import { Todo } from '@/models/common';
import TodoItem from './TodoItem';

function TodoList(): JSX.Element {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState<string>('');
	const inputAddRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleAddTodo = () => {
		if (newTodo.trim() !== '') {
			const newId = todoList.length + 1;
			const newTodoItem: Todo = {
				id: newId,
				title: newTodo,
			};
			setTodoList([...todoList, newTodoItem]);
			setNewTodo('');
			inputAddRef.current && inputAddRef.current.focus();
		}
	};

	const handleDeleteTodo = (id: number) => {
		const updateTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(updateTodoList);
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
				{todoList.length ? (
					todoList.map((todo) => {
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
