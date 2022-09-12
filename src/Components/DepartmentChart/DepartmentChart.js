import React from 'react';
import ChartStyles from './DepartmentChart.module.css';
import { useSelector } from 'react-redux';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Registered vs Closed',
		},
	},
};

function DepartmentChart() {
	const projects = useSelector((state) => state.project.projects);
	const labels = projects.map((project) => {
		return project.department;
	});
	const data = {
		labels,
		datasets: [
			{
				label: 'Registered',
				data: [12, 34, 65, 13, 54],
				backgroundColor: 'rgb(5, 7, 128)',
			},
			{
				label: 'Closed',
				data: [34, 65, 24, 2, 4],
				backgroundColor: 'rgb(14, 99, 6)',
			},
		],
	};
	return (
		<div className={ChartStyles.chart_container}>
			<Bar options={options} data={data} />
		</div>
	);
}

export default DepartmentChart;
