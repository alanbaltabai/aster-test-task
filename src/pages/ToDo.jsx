import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { observer } from 'mobx-react-lite';
import { Form, useActionData } from 'react-router-dom';

import Task from '../components/Task';
import EditTaskForm from '../components/EditTaskForm';
import FilterNavs from '../components/FilterNavs';
import { Typography } from '@mui/material';

const ToDo = observer(function ({ store }) {
	const actionData = useActionData();

	const tasks = getFilteredTasks().map((item, i) =>
		item.isEditing ? (
			<>
				<EditTaskForm key={i} editTodo={editTodo} task={item} />
			</>
		) : (
			<Task
				key={i}
				task={item}
				toggleComplete={toggleComplete}
				editTask={editTask}
				deleteTask={deleteTask}
			/>
		)
	);

	function getFilteredTasks() {
		const finishedTasks = store.tasks.filter((item) => item.isComplete);
		const unfinishedTasks = store.tasks.filter((item) => !item.isComplete);
		const newestFirstOrderedTasks = store.tasks.toReversed();

		if (store.currentFilter === 'finished') return finishedTasks;
		if (store.currentFilter === 'unfinished') return unfinishedTasks;
		if (store.currentFilter === 'newestFirst') return newestFirstOrderedTasks;

		return store.tasks;
	}

	function handleClick() {
		store.setTasks([
			...store.tasks,
			{
				id: crypto.randomUUID(),
				task: store.task,
				isComplete: false,
				isEditing: false,
			},
		]);

		store.setTask('');
	}

	function toggleComplete(id) {
		store.setTasks(
			store.tasks.map((item) =>
				item.id === id ? { ...item, isComplete: !item.isComplete } : item
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

			{tasks}

			<Form method='post'>
				<Button
					type='submit'
					variant='contained'
					sx={{
						color: (theme) => theme.palette.secondary.main,
						'&:hover': { color: (theme) => theme.palette.primary.main },
					}}
					size='small'
				>
					Сохранить данные
				</Button>
			</Form>

			{actionData && <Typography>{actionData.message}</Typography>}
		</Box>
	);
});

export default ToDo;
