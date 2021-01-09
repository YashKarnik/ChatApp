import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';
import { Button, TextField, InputLabel } from '@material-ui/core';
import Modal from './Modal';
export default function ChangeEmail() {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');
	const { changeEmail, currentUser } = useUserContext();
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await changeEmail(email);
			setOpen(false);
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
				Change Email
			</Button>
			<Modal setOpen={setOpen} open={open}>
				<p className='modal-header'>Change Email</p>
				<form className='modal-content' onSubmit={handleSubmit}>
					<TextField
						id='outlined-basic'
						label='New email'
						variant='outlined'
						onChange={e => setEmail(e.target.value)}
					/>
					<Button
						type='submit'
						variant='outlined'
						size='large'
						type='submit'
						color='primary'>
						Submit
					</Button>
				</form>
			</Modal>
		</>
	);
}
