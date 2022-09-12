import { BASE_URL } from '../config/axios.config';
import { loginStart, loginSuccess, loginFailed } from './userSlice';
import {
	projectAdding,
	projectAdded,
	projectAddFailed,
	projectsFetching,
	projectsFetched,
	projectsFetchingFailed,
	projectUpdating,
	projectUpdated,
	projectUpdateFailed,
} from './projectSlice';
import axios from 'axios';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await axios.post(`${BASE_URL}user/login`, user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailed(error));
	}
};

export const addProject = async (dispatch, project) => {
	dispatch(projectAdding());
	try {
		const res = await axios.post(`${BASE_URL}project/`, project, {
			headers: { Authorization: sessionStorage.getItem('token') },
		});
		dispatch(projectAdded(res.data));
	} catch (error) {
		dispatch(projectAddFailed(error));
	}
};

export const getProjects = async (dispatch, qSearch, qFilter) => {
	dispatch(projectsFetching());
	try {
		let query_URL = `${BASE_URL}project`;
		if (qFilter) {
			query_URL = `${BASE_URL}project?qFilter=${qFilter}`;
		} else if (qSearch) {
			query_URL = `${BASE_URL}project?qName=${qSearch}`;
		}
		const res = await axios.get(query_URL, {
			headers: { Authorization: sessionStorage.getItem('token') },
		});
		dispatch(projectsFetched(res.data));
	} catch (error) {
		dispatch(projectsFetchingFailed(error));
	}
};

export const updateProject = async (dispatch, payload) => {
	dispatch(projectUpdating());
	try {
		const { id, status } = payload;
		const res = await axios.put(
			`${BASE_URL}project/${id}`,
			{ status },
			{ headers: { Authorization: sessionStorage.getItem('token') } }
		);
		dispatch(projectUpdated(res.data));
	} catch (error) {
		dispatch(projectUpdateFailed);
	}
};
