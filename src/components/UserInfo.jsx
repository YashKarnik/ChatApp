import React from 'react';
import { useUserContext } from '../contexts/userContext';
import { Gear } from '../assets/svg/index';

import ProfilePicture from './PofilePicture';
import ChangeEmail from './ChangeEmail';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
export default function UserInfo() {
	const { currentUser } = useUserContext();

	return (
		<div className='chat-window-item user-info-container flex-rows'>
			<div className='flex-rows'>
				<ProfilePicture />
				<p className='username-display'>
					@{currentUser.displayName || <ChangeName />}
				</p>
			</div>
			<div
				className='settings-btn'
				onClick={() => {
					let temp = document.querySelector('#dropdown').style.display;
					document.querySelector('#dropdown').style.display =
						temp === 'flex' ? 'none' : 'flex';
				}}>
				<Gear />{' '}
				<div
					id='dropdown'
					style={{ display: 'none' }}
					className='flex-cols dropdown my-1'>
					<ProfilePicture isSettings={true} />
					<ChangeName />
					<ChangeEmail />
					<ChangePassword />
					<Logout />
				</div>
			</div>
		</div>
	);
}
