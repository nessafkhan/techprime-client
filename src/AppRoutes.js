import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProjectPage from './Pages/AddProjectPage';
import Dashboard from './Pages/Dashboard';
import ListProjectPage from './Pages/ListProjectPage';
import LoginPage from './Pages/LoginPage';
import { useSelector } from 'react-redux';
const AppRoutes = () => {
	const user = useSelector((state) => state.user.authenticated);
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			{user && (
				<>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/add-project" element={<AddProjectPage />} />
					<Route path="/project" element={<ListProjectPage />} />
					<Route path="*" element={<h1>404 Not found</h1>} />
				</>
			)}
		</Routes>
	);
};

export default AppRoutes;
