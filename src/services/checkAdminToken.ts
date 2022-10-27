import axios from "../axios";
import { updateDefaultToken } from "../utils/updateDefaultToken";
import {refreshAdminToken} from "./refreshAdminToken";

export const checkAdminToken = async () => {
  try {
    const response = await axios.get("api/check_admin_token/");
    await console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    const refresh = localStorage.getItem("AdminRefresh");
    const response = await refreshAdminToken(refresh);
    if (await response) {
      await localStorage.setItem("AdminAuth", `Bearer ${response.data.access}`);
      await localStorage.setItem("AdminRefresh", `Bearer ${response.data.refresh}`);
      await updateDefaultToken("AdminAuth");
      return { status: "ok" };
    }
  }
};
