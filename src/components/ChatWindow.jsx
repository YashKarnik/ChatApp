import React from 'react';
import { Button } from '@material-ui/core';
import { useUserContext } from '../contexts/userContext';
import { useHistory } from 'react-router-dom';
export default function ErrorPage() {
	let history = useHistory();
	const { currentUser, logout } = useUserContext();
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
			<p>HEllo</p>
			<p>HEllo</p>
			<p>HEllo</p>
		</div>
	);
}
