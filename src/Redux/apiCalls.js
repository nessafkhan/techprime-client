import { API_USER_REQUEST,API_LOGIN_REQUEST } from '../config/axios.config';
import { loginStart, loginSuccess, loginFailed } from './userSlice';
import { projectAdding, projectAdded, projectAddFailed, projectsFetching, projectsFetched, projectsFetchingFailed } from './projectSlice';


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await API_LOGIN_REQUEST.post('user/login', user);
        dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailed(error));
    }
}

export const addProject = async (dispatch, project) => {
    dispatch(projectAdding());
    try{
        const res = await API_USER_REQUEST.post('project/', project);
        dispatch(projectAdded(res.data));
    }catch(error){
        dispatch(projectAddFailed(error));
    }
}

export const getProjects = async (dispatch) => {
    dispatch(projectsFetching());
    try{
        const res = await API_USER_REQUEST.get('project/');
        dispatch(projectsFetched(res.data));
    }catch(error){
        dispatch(projectsFetchingFailed(error));
    }
}