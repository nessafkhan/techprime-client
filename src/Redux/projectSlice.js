import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
	name: 'project',
	initialState: {
		projects: [],
		loading: false,
		error: null,
	},
	reducers: {
		projectAdding: (state) => {
			state.loading = true;
		},
		projectAdded: (state, action) => {
			state.projects = [...state.projects, action.payload];
			state.error = false;
			state.loading = false;
		},
		projectAddFailed: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		projectsFetching: (state) => {
			state.loading = true;
		},
		projectsFetched: (state, action) => {
			state.projects = action.payload;
			state.error = false;
			state.loading = false;
		},
		projectsFetchingFailed: (state) => {
			state.loading = false;
			state.error = true;
		},
		projectUpdating: (state) => {
			state.loading = true;
		},
		projectUpdated: (state, action) => {
			state.projects[
				state.projects.findIndex(
					(project) => project._id === action.payload._id
				)
			] = action.payload;

			state.error = false;
			state.loading = false;
		},
		projectUpdateFailed: (state) => {
			state.error = true;
		},
	},
});

export const {
	projectAdding,
	projectAdded,
	projectAddFailed,
	projectsFetching,
	projectsFetched,
	projectsFetchingFailed,
	projectUpdating,
	projectUpdated,
	projectUpdateFailed,
} = projectSlice.actions;
export default projectSlice.reducer;
