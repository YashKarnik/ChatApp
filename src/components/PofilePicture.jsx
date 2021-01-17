import React from 'react';
import { useUserContext } from '../contexts/userContext';
import { Camera } from '../assets/svg';

export default function ProfilePicture(props) {
	const { currentUser, changeDP } = useUserContext();
	async function changeDp(e) {
		const filename = e.target.files[0].name;
		try {
			await changeDP(e.target.files[0], filename);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='settings-page-item' style={{ padding: '0', margin: '0' }}>
			{currentUser.photoURL ? (
				<div>
					{!props.isSettings && (
						<img
							className='profile-picture '
							src={currentUser.photoURL}
							alt='Display'
						/>
					)}

					{props.isSettings && (
						<div>
							<Camera
								onClick={() => document.querySelector('#file-select').click()}
							/>
						</div>
					)}
					<input
						type='file'
						style={{ display: 'none' }}
						id='file-select'
						accept='.png, .jpg, .jpeg'
						onInput={changeDp}
					/>
				</div>
			) : (
				<div
					className='profile-picture'
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
