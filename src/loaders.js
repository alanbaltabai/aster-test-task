import { checkAuth } from './utils';

async function toDoLoader() {
	checkAuth();

	return null;
}

export { toDoLoader };
