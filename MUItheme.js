import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#0B6EC7', // blue
			dark: '#1E385B', // dark-blue
			contrastText: '#FEFEFE', // white
		},
	},
	typography: {
		fontFamily: 'Montserrat',
		fontSize: 17,
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					body1: 'span',
				},
			},
		},
	},
});

export default theme;
