import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const authenticated = useSelector((state) => state.user.authenticated);
	const token = sessionStorage.getItem('token');

	// show unauthorized screen if no user is found in redux store
	if (!token && !authenticated) {
		return (
			<div className="unauthorized">
				<h1>Unauthorized :(</h1>
				<span>
					<NavLink to="/">Login</NavLink>
				</span>
			</div>
		);
	}

	// returns child route elements
	return <Outlet />;
};
export default ProtectedRoute;
