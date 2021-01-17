import React, { useState } from 'react';
import Alert from './Alert';
import { Button, TextField } from '@material-ui/core';
import { Logo, Google } from '../assets/svg/index';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import authActions from '../actions/authActions';
import { useHistory } from 'react-router-dom';

export default function Login() {
	const history = useHistory();
	const { signUp, login } = useUserContext();
	const [inputFields, setInputFields] = useState({
		email: '',
		password: '',
		confirm_password: '',
	});
	const [error, setError] = useState(false);
	async function handleEmailPassSubmit(e) {
		e.preventDefault();
		const { email, password, confirm_password } = inputFields;
		if (password !== confirm_password) setError('Passwords do not match');
		if (password.length < 6)
			setError('Passwords must be at least 6 characters long');
		else
			try {
				await signUp(email, password);
				history.push('/chats');
			} catch (e) {
				console.log(e);
				setError(e.message);
			}
	}
	async function handleGoogleSubmit(e) {
		e.preventDefault();
		try {
			await login(authActions.GOOGLE_AUTH, {});
			history.push('/chats');
		} catch (error) {
			console.log('xx', error);
		}
	}
	function handleChange(e) {
		const { name, value } = e.target;
		setInputFields(p => {
			return { ...p, [name]: value };
		});
	}
	return (
		<div className='dead-center text-center'>
			<Alert message={error} severity='error' open={error} setOpen={setError} />
			<form
				onSubmit={handleEmailPassSubmit}
				className='register-form-container animate__animated animate__fadeInDown'
				autoComplete='off'>
				<Logo style={{ height: '8rem', width: '8rem', alignSelf: 'center' }} />
				<TextField
					onChange={handleChange}
					name='email'
					label='Email'
					type='email'
					required
					className='register-form-element'
				/>
				<TextField
					onChange={handleChange}
					required
					label='Password'
					name='password'
					type='password'
					inputProps={{ minLength: '6' }}
					className='register-form-element'
				/>
				<TextField
					required
					onChange={handleChange}
					label='Confirm password'
					type='password'
					name='confirm_password'
					inputProps={{ minLength: '6' }}
					className='register-form-element'
				/>

				<Button
					type='submit'
					variant='outlined'
					size='large'
					className='register-form-element'>
					Sign up
				</Button>
				<Button
					variant='outlined'
					size='large'
					type='button'
					onClick={handleGoogleSubmit}
					className='register-form-element'>
					<Google
						style={{ height: '1.8rem', width: '1.8rem', marginRight: '1rem' }}
					/>
					Login with Google
				</Button>
				<Link to='/' className='links'>
					Already have an account? Login here
				</Link>
			</form>
		</div>
	);
}
