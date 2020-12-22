import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';
import ProfilePicture from './PofilePicture';
import { Button, TextField } from '@material-ui/core';

export default function Settings() {
	const { currentUser } = useUserContext();

	return (
		<div>
			{/* {JSON.stringify(currentUser.photoURL)} */}
			<ProfilePicture isSettings={true} />
			<TextField
				// onChange={handleChange}
				name='email'
				label='Email'
				type='email'
				value={currentUser.email}
				className='register-form-element'
			/>
			<TextField
				// onChange={handleChange}
				name='name'
				label='Name'
				type='text'
				value={currentUser.name || 'No name set'}
				className='register-form-element'
			/>
			<TextField
				// onChange={handleChange}
				name='password1'
				label='Current Password'
				type='password'
				className='register-form-element'
			/>
			<TextField
				// onChange={handleChange}
				name='password2'
				label='New Password'
				type='password'
				className='register-form-element'
			/>
		</div>
	);
}
