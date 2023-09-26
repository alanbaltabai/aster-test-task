import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { observer } from 'mobx-react-lite';

import Task from '../components/Task';
import EditTaskForm from '../components/EditTaskForm';
import FilterNavs from '../components/FilterNavs';

const ToDo = observer(function ({ store }) {
	const tasks = store.tasks.map((item, i) =>
		item.isEditing ? (
			<>
				<EditTaskForm key={i} editTodo={editTodo} task={item} />
			</>
		) : (
			<Task
				// index={i}
				key={i}
				task={item}
				toggleComplete={toggleComplete}
				editTask={editTask}
				deleteTask={deleteTask}
			/>
		)
	);

	const finishedTasks = store.tasks
		.filter((item) => item.completed)
		.map((item, i) =>
			item.isEditing ? (
				<>
					<EditTaskForm key={i} editTodo={editTodo} task={item} />
				</>
			) : (
				<Task
					// index={i}
					key={i}
					task={item}
					toggleComplete={toggleComplete}
					editTask={editTask}
					deleteTask={deleteTask}
				/>
			)
		);

	const unfinishedTasks = store.tasks
		.filter((item) => !item.completed)
		.map((item, i) =>
			item.isEditing ? (
				<>
					<EditTaskForm key={i} editTodo={editTodo} task={item} />
				</>
			) : (
				<Task
					// index={i}
					key={i}
					task={item}
					toggleComplete={toggleComplete}
					editTask={editTask}
					deleteTask={deleteTask}
				/>
			)
		);

	function handleClick() {
		store.setTasks([
			...store.tasks,
			{
				id: crypto.randomUUID(),
				task: store.task,
				completed: false,
				isEditing: false,
			},
		]);

		store.setTask('');
	}

	function toggleComplete(id) {
		store.setTasks(
			store.tasks.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	}

	function editTask(id) {
		store.setTasks(
			store.tasks.map((item) =>
				item.id === id ? { ...item, isEditing: !item.isEditing } : item
			)
		);

		store.setEditedTask(store.tasks.find((item) => item.id === id).task);
	}

	function editTodo(task, id) {
		store.setTasks(
			store.tasks.map((item) =>
				item.id === id ? { ...item, task, isEditing: !item.isEditing } : item
			)
		);
	}

	function deleteTask(id) {
		store.setTasks(store.tasks.filter((item) => item.id !== id));
	}

	return (
		<Box component='section'>
			<FilterNavs />

			<FormControl>
				<FormLabel>Добавьте задачу:</FormLabel>
				<TextField
					value={store.task}
					onChange={(event) => store.setTask(event.target.value)}
				/>
				<Button
					variant='contained'
					disabled={store.task === ''}
					sx={{
						color: (theme) => theme.palette.secondary.main,
						'&:hover': { color: (theme) => theme.palette.primary.main },
					}}
					onClick={handleClick}
				>
					Добавить
				</Button>
			</FormControl>

			{store.currentFilter === 'all' && tasks}
			{store.currentFilter === 'finished' && finishedTasks}
			{store.currentFilter === 'unfinished' && unfinishedTasks}
		</Box>
	);
});

export default ToDo;
