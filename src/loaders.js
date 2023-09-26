import { checkAuth } from './utils';

/* async function toDoLoader({ request }) {
	await checkAuth(request);

	return null;
} */

async function toDoLoader() {
	checkAuth();

	return null;
}

export { toDoLoader };
