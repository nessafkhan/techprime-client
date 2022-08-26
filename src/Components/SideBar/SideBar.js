import React from 'react';
import SideBarStyles from './SideBar.module.css';
import { Link } from 'react-router-dom';
import DashBoardSVG from '../../assets/DashBoardSVG';
import ListSVG from '../../assets/ListSVG';
import AddSVG from '../../assets/AddSVG';
import LogoutSVG from '../../assets/LogoutSVG';

const SideBar = () => {
	return (
		<nav className={SideBarStyles.side_nav}>
			<ul className={SideBarStyles.list}>
				<Link to="/dashboard">
        <li className={SideBarStyles.list_item}><DashBoardSVG/></li>
        </Link>
        <Link to="/project">
        <li className={SideBarStyles.list_item}><ListSVG/></li>
        </Link>
        <Link to="/add-project">
        <li className={SideBarStyles.list_item}><AddSVG/></li>
        </Link>
        <hr></hr>
        <Link to="/logout">
        <li className={SideBarStyles.list_item}><LogoutSVG/></li>
        </Link>
			</ul>
		</nav>
	);
};

export default SideBar;
