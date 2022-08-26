import axios from 'axios';

const BASE_URL = 'https://techprime-backend.herokuapp.com/api/';

const getToken = () => {
	try{
		return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.jwt_token;
	}catch(error){
		console.log(error);
	}
}



export const API_USER_REQUEST = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer  ${getToken()}` },
});
