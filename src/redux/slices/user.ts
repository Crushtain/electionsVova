import {UserData, UserState, UserStatus} from "../../types/user";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('/', async (params) => {
  // const { data } = await axios.post('/', params)
  return {
    voteFor: null,
    isStudent: false,
    isuId: null
  } as UserData
})

const initialState: UserState = {
  data: {
    voteFor: null,
    isStudent: false,
    isAdmin: false,
    isuId: null,
  },
  status: UserStatus.loaded
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state: UserState) => {
      state.data = initialState;
    },
    adminLogin: (state: UserState) => {
      state.data = {...state.data, isAdmin: true};
    },
    adminLogout: (state: UserState) => {
      state.data = {...state.data, isAdmin: false};
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
      state.data = {...state.data, ...action.payload};
    })
      .addCase(fetchUserData.rejected, (state: UserState) => {
      state.status = UserStatus.error;
      state.data = initialState;
    })
  }
})

export const selectIsAuth = (state) => Boolean(state.user.data);

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;
export const { adminLogin } = userSlice.actions;
export const { adminLogout } = userSlice.actions;