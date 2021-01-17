import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import { Button } from '@material-ui/core';
import Modal from './Modal';
export default function ChangeEmail() {
	const [open, setOpen] = useState(false);
	const history = useHistory();
	const { logout } = useUserContext();
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await logout();
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<Button
				variant='outlined'
				size='large'
				type='button'
				color='primary'
				className='register-form-element'
				onClick={() => setOpen(true)}>
				Logout
			</Button>
			<Modal setOpen={setOpen} open={open}>
				<p className='modal-header'>Sure?</p>
				<form className='modal-content' onSubmit={handleSubmit}>
					<Button type='submit' variant='outlined' size='large' color='primary'>
						Logout
					</Button>
				</form>
			</Modal>
		</>
	);
}
