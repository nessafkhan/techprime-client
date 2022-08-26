import React from 'react';
import ListProjectStyles from './ListProject.module.css';

const ListProject = () => {
	return (
		<div className={ListProjectStyles.container}>
			<div className={ListProjectStyles.filter_wrapper}>
				<div className={ListProjectStyles.serchinput_container}>
					<form>
						<input
							type="text"
							className={ListProjectStyles.search_input}
						/>
					</form>
				</div>
				<div className={ListProjectStyles.sort_container}>
					<label htmlFor="sort">Sort By:</label>
					<select
						name="sort"
						id="sort"
						className={ListProjectStyles.sort_selector}
					>
						<option value=""> --Choose-- </option>
						<option value="priority">Priority</option>
						<option value="status">Status</option>
						<option value="division">Division</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default ListProject;
