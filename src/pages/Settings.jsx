import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function Settings() {
	return (
		<FormControl>
			<FormLabel>Тема оформления:</FormLabel>
			<RadioGroup onChange={() => {}}>
				<FormControlLabel value='light' control={<Radio />} label='Светлая' />
				<FormControlLabel value='dark' control={<Radio />} label='Темная' />
				<FormControlLabel value='system' control={<Radio />} label='Система' />
			</RadioGroup>
		</FormControl>
	);
}

export default Settings;
