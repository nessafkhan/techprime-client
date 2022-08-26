import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProject from './Pages/AddProject';
import Dashboard from './Pages/Dashboard';
import ListProjects from './Pages/ListProjects';
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
					<Route path="/add-project" element={<AddProject />} />
					<Route path="/project" element={<ListProjects />} />
					<Route path="*" element={<h1>404 Not found</h1>} />
				</>
			)}
		</Routes>
	);
};

export default AppRoutes;
