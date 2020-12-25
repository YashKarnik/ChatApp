import React, { useState } from 'react';
import { Button, TextField, InputLabel } from '@material-ui/core';
import Modal from './Modal';
export default function ChangeEmail() {
	const [open, setOpen] = useState(false);
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
				<form className='modal-content'>
					<TextField id='outlined-basic' label='New email' variant='outlined' />
					<Button
						type='submit'
						variant='outlined'
						size='large'
						type='button'
						color='primary'>
						Submit
					</Button>
				</form>
			</Modal>
		</>
	);
}
