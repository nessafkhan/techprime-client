import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import TopBarDiv from '../Components/TopBarDiv/TopBarDiv';
import ListProject from '../Components/ListProjects/ListProject';

const ListProjectPage = () => {
	return (
		<div>
			<SideBar />
			<TopBarDiv h={'150px'} w={'100%'} m={'0 75px'} title={'Projects'} />
			<ListProject />
		</div>
	);
};

export default ListProjectPage;
