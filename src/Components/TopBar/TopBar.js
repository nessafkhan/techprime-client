import React from 'react';
import TopBarStyles from './TopBar.module.css';

const TopBar = () => {
	return <div className={TopBarStyles.topbar}>
		<h4 className={TopBarStyles.container_text}>Dashboard</h4>
		<div className={TopBarStyles.cards_wrapper}>
			<div className={TopBarStyles.cards}>
				<h4>Registered</h4>
				<h2>8</h2>
			</div>
			<div className={TopBarStyles.cards}>
				<h4>Registered</h4>
				<h2>8</h2>
			</div>
			<div className={TopBarStyles.cards}>
				<h4>Registered</h4>
				<h2>8</h2>
			</div>
			<div className={TopBarStyles.cards}>
				<h4>Registered</h4>
				<h2>8</h2>
			</div>
			<div className={TopBarStyles.cards}>
				<h4>Registered</h4>
				<h2>8</h2>
			</div>
		</div>
	</div>
};

export default TopBar;
