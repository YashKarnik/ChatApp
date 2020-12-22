import React, { useState, useContext, createContext, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';
import authActions from '../actions/authActions';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = props => {
	// eslint-disable-next-line
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signUp(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(type, inpFields = {}) {
		const { email, password } = inpFields;
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
		if (type === authActions.EMAIL_PASS_AUTH)
			return auth.signInWithEmailAndPassword(email, password);
		return auth.signInWithPopup(provider);
	}
	function logout() {
		return auth.signOut();
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	let user = {
		currentUser,
		signUp,
		login,
		logout,
	};
	return (
		<UserContext.Provider value={user}>
			{!loading && props.children}
		</UserContext.Provider>
	);
};
