import { rest } from 'msw';

const users = [
	{
		login: 'alan',
		password: 'pass',
	},
	{ login: 'aleks', password: 'pass' },
];

const handlers = [
	rest.post('/login', async (req, res, ctx) => {
		try {
			const resolve = await req.json();

			const user = users.find(
				(item) =>
					item.login === resolve.login && item.password === resolve.password
			);

			if (!user)
				return res(
					ctx.status(401),
					ctx.json({ message: 'Пользователь с такими данными не найден.' })
				);

			return res(
				ctx.delay(500),
				ctx.status(200),
				ctx.json({ user, token: 'Here is your token.' })
			);
		} catch (error) {
			console.log(error);
		}
	}),
];

export { handlers };
