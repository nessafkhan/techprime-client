import React from 'react';
import TopBarStyles from './TopBar.module.css';

const TopBar = () => {
	return <div className={TopBarStyles.topbar}>
		<div className={TopBarStyles.cards_wrapper}></div>
	</div>
};

export default TopBar;
