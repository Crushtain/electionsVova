import { UserState, UserStatus } from "../../types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (params) => {
    // const { data } = await axios.post('/', params)
    return {
      voteFor: null,
      isStudent: false,
      isuId: null,
    };
  }
);

export const adminLogin = createAsyncThunk("user/adminLogin", async () => {
  const response = await fetchData("api/check_admin_token/");
  if (response)
    return {
      isAdmin: true,
    };
});

const initialState: UserState = {
  data: {
    voteFor: null,
    isStudent: false,
    isAdmin: false,
    isuId: null,
  },
  status: UserStatus.loaded,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state: UserState) => {
      state.data.isAdmin = false;
    },
    adminLogout: (state: UserState) => {
      state.data = { ...state.data, isAdmin: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state: UserState) => {
        state.status = UserStatus.loading;
        state.data = initialState.data;
      })
      .addCase(fetchUserData.fulfilled, (state: UserState, action) => {
        state.status = UserStatus.loaded;
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(fetchUserData.rejected, (state: UserState) => {
        state.status = UserStatus.error;
        state.data = initialState.data;
      })
      .addCase(adminLogin.pending, (state: UserState) => {
        state.status = UserStatus.loading;
        state.data.isAdmin = false;
      })
      .addCase(adminLogin.fulfilled, (state: UserState, action) => {
        state.status = UserStatus.loaded;
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(adminLogin.rejected, (state: UserState) => {
        state.status = UserStatus.error;
        state.data.isAdmin = false;
      });
  },
});

export const selectIsAuth = (state) => Boolean(state.user.data);
export const selectIsAdmin = (state) => state.user.data.isAdmin;

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;
export const { adminLogout } = userSlice.actions;
