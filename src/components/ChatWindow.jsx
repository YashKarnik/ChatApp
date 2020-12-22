import React from 'react';
import { useUserContext } from '../contexts/userContext';
import { useHistory } from 'react-router-dom';
import UserInfo from './UserInfo';
export default function ErrorPage() {
	let history = useHistory();
	const { logout } = useUserContext();
	async function handleLogout() {
		try {
			await logout();
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='dead-center chat-window-container'>
			<UserInfo />
			<p className='chat-window-item'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				recusandae.
			</p>
			<p className='chat-window-item'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
				recusandae.
			</p>
		</div>
	);
}
