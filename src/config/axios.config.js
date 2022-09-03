import axios from 'axios';

//techprime-backend.herokuapp.com
const BASE_URL = 'http://localhost:8000/api/';
const getToken = () => {
	try {
		return localStorage.getItem('token');
	} catch (error) {
		console.log(error);
	}
};

export const API_USER_REQUEST = axios.create({
	baseURL: BASE_URL,
	headers: { authorization: `${getToken()}` },
});
export const API_LOGIN_REQUEST = axios.create({
	baseURL: BASE_URL,
});
