import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user";
import {appInfoReducer} from "./slices/appInfo";

const store = configureStore({
  reducer: {
    user: userReducer,
    appInfo: appInfoReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;