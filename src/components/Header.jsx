import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NavLink } from 'react-router-dom';

function Header() {
	const activeNavStyle = ({ isActive }) => ({
		backgroundColor: isActive ? '#4B71A1' : '',
	});

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: (theme) => theme.palette.primary.dark,
				borderRadius: (theme) => theme.spacing(1),
			}}
			enableColorOnDark
		>
			<Toolbar>
				<Box
					component='nav'
					sx={{ display: 'flex', gap: (theme) => theme.spacing(5) }}
				>
					<NavLink to='/' style={activeNavStyle}>
						<Typography
							variant='body1'
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
								'&:hover': { color: '#E9EBEF' },
							}}
						>
							To-Do
						</Typography>
					</NavLink>

					<NavLink to='settings' style={activeNavStyle}>
						<Typography
							variant='body1'
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
								'&:hover': { color: '#E9EBEF' },
							}}
						>
							Настройки
						</Typography>
					</NavLink>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
