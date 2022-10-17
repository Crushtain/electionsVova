import {UserState, UserStatus} from "../../types/user";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('/', async (params) => {
  // const { data } = await axios.post('/', params)
  return {
    isAuth: true,
    isVoted: false,
    isStudent: true,
    isuId: 123456,
  }
})

const initialState: UserState = {
  data: {
    isVoted: false,
    isStudent: true,
    isuId: 123456,
  },
  status: UserStatus.loaded
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state: UserState) => {
      state.data = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, (state: UserState) => {
      state.status = UserStatus.loading;
      state.data = null;
    })
      .addCase(fetchUserData.fulfilled, (state: UserState, action) => {
      state.status = UserStatus.loaded;
      state.data = action.payload;
    })
      .addCase(fetchUserData.rejected, (state: UserState) => {
      state.status = UserStatus.error;
      state.data = null;
    })
  }
})

export const selectIsAuth = (state) => Boolean(state.user.data);

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;