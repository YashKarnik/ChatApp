import React from 'react';
import { useUserContext } from '../contexts/userContext';
import { Camera } from '../assets/svg';

export default function ProfilePicture(props) {
	const { currentUser, changeDP } = useUserContext();
	console.log(props.isSettings);
	async function changeDp(e) {
		const extension = e.target.files[0].name.split('.').pop();
		const filename = e.target.files[0].name;
		try {
			await changeDP(e.target.files[0], filename);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	}
	const styles = props.isSettings
		? { height: '15rem', width: '15rem', fontSize: '15rem' }
		: {};
	return (
		<div className='settings-page-item'>
			{currentUser.photoURL ? (
				<div>
					<img
						className='profile-picture'
						src={currentUser.photoURL}
						style={{ ...styles, cursor: 'default' }}
						alt='Display'
					/>{' '}
					<Camera
						onClick={() => document.querySelector('#file-select').click()}
					/>
					<input
						type='file'
						style={{ display: 'none' }}
						id='file-select'
						accept='.png, .jpg, .jpeg, .txt'
						onInput={changeDp}
					/>
				</div>
			) : (
				<div
					className='profile-picture'
					style={styles}
					onClick={() => document.querySelector('#file-select').click()}>
					+
					<input
						type='file'
						style={{ display: 'none' }}
						id='file-select'
						accept='.png, .jpg, .jpeg, .txt'
						onInput={changeDp}
					/>
				</div>
			)}
		</div>
	);
}
