import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { observer } from 'mobx-react-lite';

import Task from '../components/Task';
import { Box } from '@mui/material';

const ToDo = observer(function ({ store }) {
	const tasks = store.tasks.map((item, i) => <Task key={i} task={item} />);

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

	return (
		<Box component='section'>
			<FormControl>
				<FormLabel>Добавьте задачу:</FormLabel>
				<TextField
					value={store.task}
					onChange={(event) => store.setTask(event.target.value)}
				/>
				<Button
					variant='contained'
					disabled={!store.task}
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
		</Box>
	);
});

export default ToDo;
