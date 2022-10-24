import axios from "../axios";
import {adminLogin} from "../redux/slices/user";
import { useAppDispatch } from "./useAppDispatch";

export const useTestStart = () => {
  const dispatch = useAppDispatch();

  return async (username: string, password: string) => {
    try {
      await axios.post(`/api/token`, {
        username,
        password,
      });
      await dispatch(adminLogin);
    } catch (e) {
      console.error(e);
    }
    return null;
  };
};
