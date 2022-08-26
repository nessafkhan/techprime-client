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
			state.authenticated = true;
			state.error = false;
		},
		loginFailed: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { loginStart, loginSuccess, loginFailed } = userSlice.actions;
export default userSlice.reducer;
