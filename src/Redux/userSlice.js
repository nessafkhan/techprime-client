import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		authenticated: false,
		isFetching: false,
		error: null,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
			localStorage.setItem('token', `Bearer ${action.payload.jwt_token}`);
			state.authenticated = true;
			state.error = false;
		},
		loginFailed: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logout: (state) => {
			localStorage.removeItem('token');
			state.authenticated = false;
			state.currentUser = null;
			state.isFetching = false;
			state.error = null;
			console.log('logout');
		},
	},
});

export const { loginStart, loginSuccess, loginFailed, logout } =
	userSlice.actions;
export default userSlice.reducer;
