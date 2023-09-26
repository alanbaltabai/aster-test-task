import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Form, useActionData } from 'react-router-dom';

function Login() {
	const actionData = useActionData();

	return (
		<Form replace method='post'>
			<TextField name='login' label='Логин' />
			<TextField
				type='password'
				name='password'
				autoComplete='on'
				label='Пароль'
			/>

			<Button
				type='submit'
				variant='contained'
				sx={{
					color: (theme) => theme.palette.secondary.main,
					'&:hover': { color: (theme) => theme.palette.primary.main },
				}}
			>
				Войти
			</Button>
			{actionData && <h3 className='red'>{actionData}</h3>}
		</Form>
	);
}

export default Login;
