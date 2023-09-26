import axios from 'axios';

async function loginUser(creds) {
	try {
		const response = await axios.post('/login', creds);

		return response.data;
	} catch (error) {
		throw {
			message: error.response.data.message,
		};
	}
}

export { loginUser };
