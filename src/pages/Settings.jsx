import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { observer } from 'mobx-react-lite';

const Settings = observer(function ({ store }) {
	return (
		<FormControl>
			<FormLabel>Тема оформления:</FormLabel>
			<RadioGroup
				value={store.mode}
				onChange={(event) => store.setMode(event.target.value)}
				sx={{ flexDirection: 'row' }}
			>
				<FormControlLabel value='light' control={<Radio />} label='Светлая' />
				<FormControlLabel value='dark' control={<Radio />} label='Темная' />
			</RadioGroup>
		</FormControl>
	);
});

export default Settings;
