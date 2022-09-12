import React from 'react';
import DepartmentChart from '../Components/DepartmentChart/DepartmentChart';
import SideBar from '../Components/SideBar/SideBar'
import TopBar from '../Components/TopBar/TopBar';

const Dashboard = () => {
	return <div>
		<TopBar/>
		<SideBar/>
		<DepartmentChart/>
	</div>
};

export default Dashboard;
