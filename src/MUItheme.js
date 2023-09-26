/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme } from '@mui/material';

const defaultThemeValues = {
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
};

function getTheme(mode) {
	const palette =
		mode === 'light'
			? {
					mode: 'light',
					primary: {
						main: '#0B6EC7', // blue
						dark: '#1E385B', // dark-blue
						contrastText: '#FEFEFE', // white
					},
			  }
			: {
					mode: 'dark',
					primary: {
						main: '#fefefe', // white
						dark: '#333336', // gray
						contrastText: '#FEFEFE', // black
					},

					background: {
						default: '#000',
					},
			  };

	return createTheme({
		...defaultThemeValues,
		palette,
	});
}

export default getTheme;
