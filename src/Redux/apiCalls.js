import { API_USER_REQUEST } from '../config/axios.config';
import { loginStart, loginSuccess, loginFailed } from './userSlice';

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await API_USER_REQUEST.post('user/login', user);
        dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailed(error));
    }
}