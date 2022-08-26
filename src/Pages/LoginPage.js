import React from 'react';
import Login from '../Components/Login/Login';
import TopBarDiv from '../Components/TopBarDiv/TopBarDiv';

const LoginPage = () => {
	return (
		<div>
			<TopBarDiv h={'50%'} w={'100%'} m={'0 auto'} />
			<Login />
		</div>
	);
};

export default LoginPage;
