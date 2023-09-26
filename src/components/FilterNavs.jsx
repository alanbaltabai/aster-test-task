import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { observer } from 'mobx-react-lite';
import store from '../store';

const FilterNavs = observer(function () {
	return (
		<Box
			sx={{
				my: (theme) => theme.spacing(4.5),
				display: 'flex',
				gap: (theme) => theme.spacing(4.5),
			}}
		>
			{store.filters.map((item, i) => (
				<Typography
					key={i}
					sx={{
						cursor: 'pointer',
						textDecoration:
							item.value === store.currentFilter ? 'underline' : 'none',
					}}
					onClick={() => store.setCurrentFilter(item.value)}
				>
					{item.text}
				</Typography>
			))}
		</Box>
	);
});

export default FilterNavs;
