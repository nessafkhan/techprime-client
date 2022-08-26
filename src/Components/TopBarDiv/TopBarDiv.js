import React from 'react';
import TopBarDivStyle  from './TopBarDiv.module.css';

const TopBarDiv = ({h,w,m, title}) => {
	return <div className={TopBarDivStyle.container} style={{height:`${h}`, width:`${w}`, margin:`${m}` }}>
		<h4 className={TopBarDivStyle.container_text}>{title}</h4>
	</div>;
};

export default TopBarDiv;
