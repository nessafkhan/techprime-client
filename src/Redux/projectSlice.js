import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        porjects: null,
        loading: false,
        error:null
    },
    reducers: {
        projectAdding: (state) => {
            state.loading=true;

        },
        projectAdded: (state, action) => {
            state.porjects = action.payload;
            state.error = false;
            state.loading = false;
        },
        projectAddFailed: (state,action) => {
            state.error=action.payload;
            state.loading=false;
        }
    }

})

export const {projectAdding, projectAdded, projectAddFailed} = projectSlice.actions;
export default projectSlice.reducer;