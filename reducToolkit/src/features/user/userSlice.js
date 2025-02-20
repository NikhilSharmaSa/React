import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await fetch('https://nikk2.softtokenapis.online/user/getuser');
      const data = await response.json();
      return data; // This data will be set as the action payload
    }
  );


const initialState={
    users:[],
    status:'idle',
    error:null
}

export const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:[],
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload; // The fetched data is set as payload here
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})


export default usersSlice.reducer;