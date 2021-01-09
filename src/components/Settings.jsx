import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import ProfilePicture from './PofilePicture';
import { Button, TextField } from '@material-ui/core';
import ChangeEmail from './ChangeEmail';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
import Modal from './Modal';
export default function Settings() {
	const { currentUser } = useUserContext();

	return (
		<>
			<Link className='go-back-arrow' to='/chats'>
				←
			</Link>

			<div className='settings-page-container dead-center'>
				<ProfilePicture isSettings={true} />
				<ChangeEmail />
				<ChangeName />
				<ChangePassword />
				<Logout />
			</div>
		</>
	);
}
