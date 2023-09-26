import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import ToDo from './pages/ToDo';
import store from './store';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<ToDo />} />
			<Route path='settings' element={<Settings store={store} />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

export default router;
