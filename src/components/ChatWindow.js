import React from 'react';
import { Button } from '@material-ui/core';
import { useUserContext } from '../contexts/userContext';
import { useHistory } from 'react-router-dom';
export default function ErrorPage() {
	let history = useHistory();
	const { currentUser, logout } = useUserContext();
	async function handleLogout() {
		try {
			await logout();
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			Chat Window
			<Button
				variant='outlined'
				size='large'
				onClick={handleLogout}
				type='submit'
				className='register-form-element'>
				Log Out
			</Button>
		</div>
	);
}
