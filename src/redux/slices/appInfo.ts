import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";
import {UserStatus} from "../../types/user";

export const fetchAppInfo = createAsyncThunk('app/info', async () => {
        const { data } = await axios.get('/api/get_vote_status');
        return data;
    }
)

const initialState = {
    voteStatus: null,
    status: 'loading',
}

const appInfoSlice = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppInfo.pending, (state) => {
                state.status = UserStatus.loading;
                state.voteStatus = initialState.voteStatus;
            })
            .addCase(fetchAppInfo.fulfilled, (state, action) => {
                state.status = UserStatus.loaded;
                state.voteStatus = action.payload.status;
            })
            .addCase(fetchAppInfo.rejected, (state) => {
                state.status = UserStatus.error;
                state.voteStatus = initialState.voteStatus;
            })
    },
})

export const selectVoteStatus = (state) => state.appInfo.voteStatus;
export const selectLoadingIsVoteStarted = (state) => state.appInfo.status === 'loading';

export const appInfoReducer = appInfoSlice.reducer;