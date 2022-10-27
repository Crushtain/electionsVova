import axios from "../axios";
import {fetchUserData} from "../redux/slices/user";
import { useAppDispatch } from "./useAppDispatch";
import {updateDefaultToken} from "../utils/updateDefaultToken";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return async () => {
    const params = window.location.search;
    try {
      const response = await axios.get(`/api/login/${params}`);
      localStorage.setItem("UserAuth", `Bearer ${response.data.access_token}`);
      localStorage.setItem("UserRefresh", response.data.refresh_token);
      updateDefaultToken("UserAuth");
      dispatch(fetchUserData());
    } catch (e) {
      console.error(e);
      dispatch(fetchUserData());

    }
    return null;
  };
};
