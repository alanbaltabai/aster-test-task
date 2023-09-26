import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { observer } from 'mobx-react-lite';

import store from '../store';

const EditTaskForm = observer(function ({ editTodo, task }) {
	function handleClick() {
		editTodo(store.editedTask, task?.id);

		store.setEditedTask('');
	}

	return (
		<FormControl>
			<TextField
				value={store.editedTask}
				onChange={(event) => store.setEditedTask(event.target.value)}
			/>
			<Button
				variant='contained'
				disabled={store.editedTask === ''}
				sx={{
					color: (theme) => theme.palette.secondary.main,
					'&:hover': { color: (theme) => theme.palette.primary.main },
				}}
				onClick={handleClick}
			>
				Редактировать
			</Button>
		</FormControl>
	);
});

export default EditTaskForm;
