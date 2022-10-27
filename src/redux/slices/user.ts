import {UserState, UserStatus} from "../../types/user";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {checkAdminToken} from "../../services/checkAdminToken";
import {updateDefaultToken} from "../../utils/updateDefaultToken";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (params) => {
        try {
            const {data} = await axios.get('api/check_itmo_id/');
            console.log(data);
            if (data) {
                return data;
            }
        } catch (e) {
            const refreshToken = localStorage.getItem("itmoId_refresh");
            if (refreshToken) {
                try {
                    // refresh token, token, canVote
                    const {data} = await axios.post('api/check_itmo_id_refresh/', refreshToken);
                    console.log(data);
                    localStorage.setItem("itmoId", `Bearer ${data.access}`);
                    localStorage.setItem("itmoId_refresh", data.refresh);
                    updateDefaultToken("itmoId");
                    if (data) {
                        return data;
                    }
                } catch (e) {
                    return {
                        isAuthUser: false
                    }
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
    },
    status: UserStatus.loaded,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state: UserState) => {
            state.data.isAuthUser = false;
        },
        adminLogout: (state: UserState) => {
            state.data = {...state.data, isAdmin: false};
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
                state.data = {...state.data, ...action.payload};
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
                state.data = {...state.data, ...action.payload};
            })
            .addCase(adminLogin.rejected, (state: UserState) => {
                state.status = UserStatus.error;
                state.data.isAdmin = false;
            });
    },
});

export const selectIsAuth = (state) => state.user.isAuthUser;
export const selectIsAdmin = (state) => state.user.data.isAdmin;
export const selectIsLoading = (state) => state.status === "loading"

export const userReducer = userSlice.reducer;

export const {logout} = userSlice.actions;
export const {adminLogout} = userSlice.actions;
