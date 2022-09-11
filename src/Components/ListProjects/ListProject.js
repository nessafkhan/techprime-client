import { useEffect } from 'react';
import ListProjectStyles from './ListProject.module.css';
import { getProjects, updateProject } from '../../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const ListProject = () => {
	const dispatch = useDispatch();
	const projects = useSelector((state) => state.project.projects);
	useEffect(() => {
		getProjects(dispatch);
	}, [dispatch]);

	const projectUpdateHandler = (id, ACTION) => {
		let payload = {};
		switch (ACTION) {
			case 'START':
				payload = { id, status: 'Running' };
				updateProject(dispatch, payload);
				break;
			case 'CLOSE':
				payload = { id, status: 'Closed' };
				updateProject(dispatch, payload);
				break;
			case 'CANCEL':
				payload = { id, status: 'Cancelled' };
				updateProject(dispatch, payload);
				break;
			default:
				break;
		}
	};
	return (
		<div className={ListProjectStyles.container}>
			<div className={ListProjectStyles.filter_wrapper}>
				<div className={ListProjectStyles.serchinput_container}>
					<form>
						<input
							type="text"
							placeholder="Search"
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
						<option> --Choose-- </option>
						<option value="priority">Priority</option>
						<option value="status">Status</option>
						<option value="division">Division</option>
					</select>
				</div>
			</div>

			<table className={ListProjectStyles.projects_table}>
				<thead>
					<tr>
						<th>Project Name</th>
						<th>Reason</th>
						<th>Type</th>
						<th>Division</th>
						<th>Category</th>
						<th>Priority</th>
						<th>Department</th>
						<th>Location</th>
						<th>Status</th>
					</tr>
				</thead>
				{projects.length > 0 ? (
					<tbody>
						{projects.map((item) => (
							<tr key={item._id}>
								<td>{item.name}</td>
								<td>{item.reason}</td>
								<td>{item.type}</td>
								<td>{item.division}</td>
								<td>{item.category}</td>
								<td>{item.priority}</td>
								<td>{item.department}</td>
								<td>{item.location}</td>
								<td>{item.status}</td>
								<button
									className={
										ListProjectStyles.table_btn_start
									}
									onClick={() => {
										projectUpdateHandler(item._id, 'START');
									}}
								>
									Start
								</button>
								<button
									className={ListProjectStyles.table_btn}
									onClick={() => {
										projectUpdateHandler(item._id, 'CLOSE');
									}}
								>
									Close
								</button>
								<button
									className={ListProjectStyles.table_btn}
									onClick={() => {
										projectUpdateHandler(
											item._id,
											'CANCEL'
										);
									}}
								>
									Cancel
								</button>
							</tr>
						))}
					</tbody>
				) : (
					<h3 className={ListProjectStyles.not_found}>
						No projects found!
					</h3>
				)}
			</table>
		</div>
	);
};

export default ListProject;
