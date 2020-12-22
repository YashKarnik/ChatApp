import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserProvider } from './contexts/userContext';
import { ThemeProvider } from './contexts/themeContext';
import Login from './components/Login';
import Register from './components/Register';
import ChatWindow from './components/ChatWindow';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import Settings from './components/Settings';
function App() {
	return (
		<Router>
			<UserProvider>
				<ThemeProvider>
					<Route path='/' exact component={Login} />
					<Route path='/signup' exact component={Register} />
					<PrivateRoute path='/chats' exact component={ChatWindow} />
					<PrivateRoute path='/settings' exact component={Settings} />
				</ThemeProvider>
			</UserProvider>
		</Router>
	);
}

export default App;
