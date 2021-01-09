import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from './PofilePicture';
import ChangeEmail from './ChangeEmail';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
export default function Settings() {
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
