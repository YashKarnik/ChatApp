import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';

import { Button, TextField } from '@material-ui/core';
import Modal from './Modal';
export default function ChangeEmail() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState('');
	const { changeName, currentUser } = useUserContext();
	async function handleSubmit(e) {
		e.preventDefault();
		console.log(name);
		console.log(currentUser);
		try {
			await changeName(name);
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
				Change Name
			</Button>
			<Modal setOpen={setOpen} open={open}>
				<p className='modal-header'>Change Name</p>
				<form className='modal-content' onSubmit={handleSubmit}>
					<TextField
						id='outlined-basic'
						label='New Name'
						variant='outlined'
						onChange={e => setName(e.target.value)}
					/>
					<Button type='submit' variant='outlined' size='large' color='primary'>
						Submit
					</Button>
				</form>
			</Modal>
		</>
	);
}
