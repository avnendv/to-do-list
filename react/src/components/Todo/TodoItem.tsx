import { Todo } from '@/models/common';

interface TodoItemProps {
	todo: Todo;
	onDelete: (id: number) => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps): JSX.Element {
	const handleDelete = () => onDelete(todo.id);
	return (
		<li>
			{todo.title}{' '}
			<span className="close" onClick={handleDelete}>
				&times;
			</span>
		</li>
	);
}

export default TodoItem;
