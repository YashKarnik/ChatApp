import React from 'react';
import ReactDOM from 'react-dom';

import { Alert as AlertMaterial } from '@material-ui/lab';
export default function Alert(props) {
	// console.log(open);
	if (!props.open) return null;
	return ReactDOM.createPortal(
		<AlertMaterial
			className='alert animate__animated animate__fadeIn'
			severity={props.severity}>
			{props.message}
			<span
				className='alert-close-btn'
				onClick={e => {
					console.log(props);
					props.setOpen(p => !p);
				}}>
				&times;
			</span>
		</AlertMaterial>,
		document.getElementById('errors')
	);
}
