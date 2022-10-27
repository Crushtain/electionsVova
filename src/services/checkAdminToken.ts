import axios from "../axios";
import { updateDefaultToken } from "../utils/updateDefaultToken";
import { refreshAdminToken } from "./refreshAdminToken";

export const checkAdminToken = async () => {
  try {
    const response = await axios.get("api/check_admin_token/");
    return response.data;
  } catch (e) {
    const refresh = localStorage.getItem("AdminRefresh");
    if (refresh) {
      const data = await refreshAdminToken(refresh);
      if (data) {
        localStorage.setItem("AdminAuth", `Bearer ${data.access}`);
        localStorage.setItem("AdminRefresh", data.refresh);
        updateDefaultToken("AdminAuth");
        return { status: "ok" };
      }
    }
  }
};
