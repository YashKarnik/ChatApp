import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';
import ProfilePicture from './PofilePicture';
import { Button, TextField } from '@material-ui/core';
import ChangeEmail from './ChangeEmail';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import Modal from './Modal';
export default function Settings() {
	const { currentUser } = useUserContext();

	return (
		<div className='settings-page-container dead-center'>
			<ProfilePicture isSettings={true} />
			<ChangeEmail />
			<ChangeName />
			<ChangePassword />
		</div>
	);
}
