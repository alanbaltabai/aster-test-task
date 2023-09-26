import { redirect } from 'react-router-dom';

function checkAuth() {
	const isLoggedIn = localStorage.getItem('isLoggedIn');

	if (isLoggedIn !== 'yes') throw redirect(`/login`);
}

export { checkAuth };
