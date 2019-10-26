import React from 'react';
import { withRouter } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className="background-image"
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">Shop now</span>
			</div>
		</div>
	);
};
//returns super powerd menuItem comp wiht access to history, location, match
export default withRouter(MenuItem);