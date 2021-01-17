import React from 'react';
import UserInfo from './UserInfo';
import ProfilePicture from './PofilePicture';
import ChatBox from './ChatBox';
import { useUserContext } from '../contexts/userContext';

export default function ChatWindow() {
	const { currentUser } = useUserContext();
	return (
		<div className='dead-center chat-window-container'>
			<UserInfo />
			<div className='chat-window-item'>
				<div className='flex-rows contacts-list-item'>
					<ProfilePicture />
					<div>
						{' '}
						<b>@{currentUser.displayName}</b>{' '}
					</div>
				</div>
			</div>
			<div className='chat-window-item'>
				<ChatBox />
			</div>
		</div>
	);
}
