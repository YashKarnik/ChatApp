import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Logo, Google } from '../assets/svg/index';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import authActions from '../actions/authActions';

export default function Login() {
	const [inputFields, setInputFields] = useState({ email: '', password: '' });
	const { login, currentUser } = useUserContext();
	function handleChange(e) {
		const { name, value } = e.target;
		setInputFields(p => {
			return { ...p, [name]: value };
		});
	}
	async function handleEmailPassSubmit(e) {
		e.preventDefault();
		try {
			await login(authActions.EMAIL_PASS_AUTH, inputFields);
		} catch (error) {
			console.log(error);
		}
	}
	async function handleGoogleAuth(e) {
		e.preventDefault();
		try {
			await login(authActions.GOOGLE_AUTH, {});
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='dead-center text-center'>
			<form
				onSubmit={handleEmailPassSubmit}
				className='register-form-container animate__animated animate__fadeInDown'
				autoComplete='off'>
				<Logo style={{ height: '8rem', width: '8rem', alignSelf: 'center' }} />
				<TextField
					label='Email'
					type='email'
					onChange={handleChange}
					name='email'
					className='register-form-element'
				/>
				<TextField
					label='Password'
					onChange={handleChange}
					type='password'
					name='password'
					className='register-form-element'
				/>

				<Button
					variant='outlined'
					size='large'
					type='submit'
					className='register-form-element'>
					Login
				</Button>
				<Button
					variant='outlined'
					size='large'
					type='button'
					onClick={handleGoogleAuth}
					className='register-form-element'>
					<Google
						style={{ height: '1.8rem', width: '1.8rem', marginRight: '1rem' }}
					/>
					Login with Google
				</Button>
				<Link to='/signup' className='links'>
					Don't have an account? Sign up here
				</Link>
			</form>
		</div>
	);
}
