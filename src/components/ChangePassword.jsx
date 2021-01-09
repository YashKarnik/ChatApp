import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';

import { Button, TextField } from '@material-ui/core';
import Modal from './Modal';
export default function ChangeEmail() {
	const [open, setOpen] = useState(false);
	const [password, setPassord] = useState({ password1: '', password2: '' });
	const { changePassword } = useUserContext();
	async function handleSubmit(e) {
		e.preventDefault();
		// console.log(currentUser);
		if (
			password.password1.length >= 6 &&
			password.password2.length >= 6 &&
			password.password1 === password.password2
		) {
			try {
				await changePassword(password.password1);
				setOpen(false);
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log('password missmatch');
		}
	}
	function handleChange(e) {
		const { name, value } = e.target;
		setPassord(p => {
			return { ...p, [name]: value };
		});
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
				Change Password
			</Button>
			<Modal setOpen={setOpen} open={open}>
				<p className='modal-header'>Change Password</p>
				<form className='modal-content' onSubmit={handleSubmit}>
					<TextField
						id='outlined-basic'
						label='Old password'
						variant='outlined'
						type='password'
						name='password1'
						onChange={handleChange}
					/>
					<TextField
						id='outlined-basic'
						label='New password'
						type='password'
						variant='outlined'
						onChange={handleChange}
						name='password2'
					/>
					<Button type='submit' variant='outlined' size='large' color='primary'>
						Submit
					</Button>
				</form>
			</Modal>
		</>
	);
}
