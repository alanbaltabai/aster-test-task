import { redirect } from 'react-router-dom';

import { loginUser } from './api';

async function loginAction({ request }) {
	const formData = await request.formData();
	const login = formData.get('login');
	const password = formData.get('password');

	try {
		await loginUser({ login, password });
		localStorage.setItem('isLoggedIn', 'yes');

		return redirect('/');
	} catch (error) {
		return error.message;
	}
}

export { loginAction };
