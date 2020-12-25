import React from 'react';
import ReactDOM from 'react-dom';
export default function Modal({ open, children, setOpen }) {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div className='modal-overlay'>
			<div className='animate__animated animate__fadeInDown modal '>
				<button onClick={() => setOpen(false)} className='modal-close-btn'>
					&times;
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('portal')
	);
}
