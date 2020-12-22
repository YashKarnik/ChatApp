import React from 'react';
import { Route } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import ErrorPage from '../components/ErrorPage';
export default function PrivateRoute({ component: Component, ...rest }) {
	const { currentUser } = useUserContext();
	return (
		<Route
			{...rest}
			render={restOfRpops =>
				currentUser ? <Component {...restOfRpops} /> : <ErrorPage />
			}
		/>
	);
}
