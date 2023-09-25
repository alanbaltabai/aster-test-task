import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';

import Header from './Header';

function Layout() {
	return (
		<>
			<Header />
			<Box
				component='main'
				sx={{
					mt: (theme) => theme.spacing(3),
					mx: (theme) => theme.spacing(1),
				}}
			>
				<Outlet />
			</Box>
		</>
	);
}

export default Layout;
