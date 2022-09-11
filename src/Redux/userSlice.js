import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
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
			sessionStorage.setItem('token', `Bearer ${action.payload.jwt_token}`);
			state.authenticated = true;
			state.error = false;
		},
		loginFailed: (state, action) => {
			state.isFetching = false;
			state.error = action.payload;
		},
		logout: (state) => {
			sessionStorage.removeItem('token');
			state.authenticated = false;
			state.isFetching = false;
			state.error = null;
			console.log('logout');
		},
	},
});

export const { loginStart, loginSuccess, loginFailed, logout } =
	userSlice.actions;
export default userSlice.reducer;
