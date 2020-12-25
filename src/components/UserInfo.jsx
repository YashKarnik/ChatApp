import React from 'react';
import { useUserContext } from '../contexts/userContext';
import { Gear } from '../assets/svg/index';
import { useHistory } from 'react-router-dom';
import ProfilePicture from './PofilePicture';
export default function UserInfo() {
	const { currentUser } = useUserContext();
	const history = useHistory();
	return (
		<div
			className='chat-window-item user-info-container'
			style={{ gridColumn: '1/-1' }}>
			<div className='user-info flex-rows'>
				<ProfilePicture />
				<div className='flex-cols'>
					<p>{currentUser.displayName || 'no username set'}</p>
					<p>{currentUser.email}</p>
				</div>
			</div>
			<div className='gear-icon' onClick={() => history.push('/settings')}>
				<Gear />
			</div>
		</div>
	);
}
