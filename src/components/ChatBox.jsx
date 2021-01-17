import React, { useState } from 'react';

export default function ChatBox() {
	const [message, setMessage] = useState('');
	return (
		<div style={{ height: '100%', position: 'relative' }}>
			<div
				className='flex-cols'
				style={{
					height: '28rem',
					overflowY: 'scroll',
				}}>
				<div className='text-blob text-blob-receiver'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat.
				</div>
				<div className='text-blob text-blob-sender'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat.
				</div>
				<div className='text-blob text-blob-receiver'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat.
				</div>
			</div>
			<div
				className='flex-rows'
				style={{
					width: '100%',
					height: '2rem',
					position: 'absolute',
					justifyContent: 'space-around',
					bottom: '0.2rem',
				}}>
				<input
					style={{ width: '90%' }}
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder='Type Message Here'
					id=''
				/>
				<button type='submit' style={{ borderRadius: '100000px', width: '8%' }}>
					&#12297;
				</button>
			</div>
		</div>
	);
}
