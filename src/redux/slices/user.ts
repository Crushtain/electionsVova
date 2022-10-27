import { UserState, UserStatus } from "../../types/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAdminToken } from "../../services/checkAdminToken";
import { updateDefaultToken } from "../../utils/updateDefaultToken";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const { data } = await axios.get("api/check_itmo_id/");
      if (data) {
        return {
          isAuthUser: true,
          canVote: data.can_vote,
        };
      }
    } catch (e) {
      const refreshToken = localStorage.getItem("UserRefresh");
      if (refreshToken) {
        try {
          const { data } = await axios.post(
            "api/check_itmo_id_refresh/",
            refreshToken
          );
          localStorage.setItem("UserAuth", `Bearer ${data.access_token}`);
          localStorage.setItem("UserRefresh", data.refresh_token);
          updateDefaultToken("UserAuth");
          if (data) {
            return {
              isAuthUser: true,
              canVote: data.can_vote,
            };
          }
        } catch (e) {
          return {
            isAuthUser: false,
            canVote: false,
          };
        }
      }
    }
  }
);

export const adminLogin = createAsyncThunk("user/adminLogin", async () => {
  const response = await checkAdminToken();
  if (await response)
    return {
      isAdmin: true,
    };
});

const initialState: UserState = {
  data: {
    isAdmin: false,
    isAuthUser: false,
    canVote: false,
  },
  status: UserStatus.loaded,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state: UserState) => {
      state.data.isAuthUser = false;
      state.data.canVote = false;
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

export const selectCanVote = (state) => state.user.data.canVote;
export const selectIsAuth = (state) => state.user.data.isAuthUser;
export const selectIsAdmin = (state) => state.user.data.isAdmin;
export const selectIsLoading = (state) => state.status === "loading";

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;
export const { adminLogout } = userSlice.actions;
