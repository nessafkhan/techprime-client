import React, { useState } from 'react';
import AddProjectStyles from './AddProject.module.css';

const AddProject = () => {
	const [inputName, setInputName] = useState('');
	const [reason, setReason] = useState('');
	const [type, setType] = useState('');
	const [division, setDivision] = useState('');
	const [category, setCategory] = useState('');
	const [priority, setPriority] = useState('');
	const [department, setDepartment] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [location, setLocation] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className={AddProjectStyles.form_container}>
			<form className={AddProjectStyles.form} onSubmit={submitHandler}>
				<input
					placeholder="Enter the name"
					className={AddProjectStyles.input_box}
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
				/>
				<div className={AddProjectStyles.selector_group}>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="reason">Reason</label>
						<br />
						<select
							name="reason"
							id="reason"
							className={AddProjectStyles.selector}
							value={reason}
							onChange={(e) => setReason(e.target.value)}
						>
							<option value="Business">For Business</option>
							<option value="Transport">For Transport</option>
							<option value="Dealership">For Dealership</option>
						</select>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="type">Type</label>
						<br />
						<select
							name="type"
							id="type"
							className={AddProjectStyles.selector}
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<option value="Internal">Internal</option>
							<option value="External">External</option>
							<option value="Vendor">Vendor</option>
						</select>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="division">Division</label>
						<br />
						<select
							name="division"
							id="division"
							className={AddProjectStyles.selector}
							value={division}
							onChange={(e) => setDivision(e.target.value)}
						>
							<option value="Compressor">Compressor</option>
							<option value="Filters">Filters</option>
							<option value="Glass">Glass</option>
							<option value="Pumps">Pumps</option>
						</select>
					</div>
				</div>

				<div className={AddProjectStyles.selector_group}>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="category">Category</label>
						<br />
						<select
							name="category"
							id="category"
							className={AddProjectStyles.selector}
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="Quality A">Quality A</option>
							<option value="Quality B">Quality B</option>
							<option value="Quality C">Quality C</option>
						</select>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="priority">Priority</label>
						<br />
						<select
							name="priority"
							id="priority"
							className={AddProjectStyles.selector}
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
						>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="department">Department</label>
						<br />
						<select
							name="department"
							id="department"
							className={AddProjectStyles.selector}
							value={department}
							onChange={(e) => setDepartment(e.target.value)}
						>
							<option value="Strategy">Strategy</option>
							<option value="Finance">Finance</option>
							<option value="Quality">Quality</option>
							<option value="Maintenence">Maintenence</option>
						</select>
					</div>
				</div>
				<div className={AddProjectStyles.selector_group}>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="start">Start Date</label>
						<br />
						<input
							className={AddProjectStyles.date_input}
							type="date"
							name="start"
							min="2022-04-01"
							max="2026-04-30"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
						/>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="end">End Date</label>
						<br />
						<input
							className={AddProjectStyles.date_input}
							type="date"
							name="end"
							min="2022-04-01"
							max="2026-04-30"
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
						/>
					</div>
					<div className={AddProjectStyles.selector_container}>
						<label htmlFor="location">Location</label>
						<br />
						<select
							name="location"
							id="location"
							className={AddProjectStyles.selector}
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						>
							<option value="Pune">Pune</option>
							<option value="Mumbai">Mumbai</option>
							<option value="Delhi">Delhi</option>
							<option value="Bangalore">Bangalore</option>
						</select>
					</div>
				</div>
				<div className={AddProjectStyles.status_disabled}>
					<label htmlFor="status">Status</label>
					<br />
					<input
                        className={AddProjectStyles.date_input}
						type="text"
						id="status"
						value="Registered"
						disabled
					/>
				</div>

				<button
					type="submit"
					className={AddProjectStyles.submit_button}
				>
					Save Project
				</button>
			</form>
		</div>
	);
};

export default AddProject;
