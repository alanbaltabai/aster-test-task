import { ThemeProvider } from '@mui/material';

import { RouterProvider } from 'react-router-dom';

import router from './src/routes';
import theme from './MUItheme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
