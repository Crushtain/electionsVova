import axios from "../axios";
import {fetchUserData} from "../redux/slices/user";
import {useAppDispatch} from "./useAppDispatch";

export const useTestStart = () => {
  const dispatch = useAppDispatch();

  return async (candidate: number) => {
    try {
      await axios.post(`/api/make_vote`, candidate); // Узнать какие данные????
      await dispatch(fetchUserData());
    } catch (e) {
      console.error(e);
    }
    return null;
  };
};