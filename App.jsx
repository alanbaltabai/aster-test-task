import { CssBaseline, ThemeProvider } from '@mui/material';

import { RouterProvider } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import getTheme from './src/MUItheme';
import router from './src/routes';
import store from './src/store';

const App = observer(function () {
	return (
		<ThemeProvider theme={getTheme(store.mode)}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
});

export default App;
