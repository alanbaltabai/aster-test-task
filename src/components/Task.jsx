/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Task({ /* index, */ task, toggleComplete, editTask, deleteTask }) {
	return (
		<Box
			sx={{
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				maxWidth: '35%',
				p: (theme) => theme.spacing(0.5),
				mt: (theme) => theme.spacing(1.5),
				mb: (theme) => theme.spacing(0.5),
			}}
		>
			<Typography
				onClick={() => toggleComplete(task?.id)}
				sx={task?.completed ? { textDecoration: 'line-through' } : {}}
			>
				{task?.task}
			</Typography>
			<Box sx={{ display: 'flex', gap: (theme) => theme.spacing(2) }}>
				<FontAwesomeIcon
					icon={faPenToSquare}
					onClick={() => editTask(task?.id)}
				/>
				<FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task?.id)} />
			</Box>
		</Box>
	);
}

export default Task;
