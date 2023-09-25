import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';

import Header from './Header';

function Layout() {
	return (
		<>
			<Header />
			<Box component='main'>
				<Outlet />
			</Box>
		</>
	);
}

export default Layout;
