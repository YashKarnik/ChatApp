import React, { useState, useContext, createContext, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth, storage } from '../firebase';
import authActions from '../actions/authActions';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = props => {
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
	function changeDP(file, filename) {
		let x = new Promise(handlePromise);
		function handlePromise(resolve, reject) {
			let imageRef = storage
				.ref()
				.child(`display-pictures/user/${currentUser.uid}/${filename}`);

			function getDownloadUrlFunction() {
				function updateUser(url) {
					auth.currentUser
						.updateProfile({
							photoURL: url,
						})
						.then(() => resolve('SUCCESS'))
						.catch(err => reject(err));
				}
				imageRef.getDownloadURL().then(updateUser);
			}
			imageRef.put(file).then(getDownloadUrlFunction);
		}
		return x;
	}
	function changeName(name) {
		return firebase.auth().currentUser.updateProfile({ displayName: name });
	}
	function changeEmail(email) {
		return firebase.auth().currentUser.updateEmail(email);
	}
	function changePassword(password) {
		return firebase.auth().currentUser.updatePassword(password);
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
		changeDP,
		changeName,
		changeEmail,
		changePassword,
	};

	return (
		<UserContext.Provider value={user}>
			{!loading && props.children}
		</UserContext.Provider>
	);
};
