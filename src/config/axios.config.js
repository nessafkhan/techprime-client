import axios from 'axios';

const BASE_URL = 'https://techprime-backend.herokuapp.com/api/';
const getToken = () => {
	try {
		return localStorage.getItem('token');
	} catch (error) {
		console.log(error);
	}
};

export const API_USER_REQUEST = axios.create({
	baseURL: BASE_URL,
	headers: { authorization: `Bearer ${getToken()}` },
});
