import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import ToDo from './pages/ToDo';
import store from './store';
import { toDoLoader } from './loaders';
import { loginAction } from './actions';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<ToDo />} loader={toDoLoader} />
			<Route path='login' element={<Login />} action={loginAction} />
			<Route path='settings' element={<Settings store={store} />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

export default router;
