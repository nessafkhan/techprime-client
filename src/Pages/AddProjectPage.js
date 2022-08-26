import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import TopBarDiv from '../Components/TopBarDiv/TopBarDiv';
import AddProject from '../Components/AddProject/AddProject';

const AddProjectPage = () => {
	return (
		<div>
			<SideBar />
			<TopBarDiv h={'150px'} w={'100%'} m={'0 75px'} title={'Add project'} />
      <AddProject/>
		</div>
	);
};

export default AddProjectPage;
