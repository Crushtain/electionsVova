import axios from "../axios";
import {adminLogin} from "../redux/slices/user";
import { useAppDispatch } from "./useAppDispatch";
import {updateDefaultToken} from "../utils/updateDefaultToken";

export const useAdminAuth = () => {
  const dispatch = useAppDispatch();

  return async (username: string, password: string) => {
    try {
      const response = await axios.post(`/api/token/`, {
        username,
        password,
      });
      await localStorage.setItem("AdminAuth", `Bearer ${response.data.access}`);
      await localStorage.setItem("AdminRefresh", `Bearer ${response.data.refresh}`);
      await updateDefaultToken("AdminAuth");
      await dispatch(adminLogin());
    } catch (e) {
      console.error(e);
    }
    return null;
  };
};
