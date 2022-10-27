import axios from "../axios";

export const updateDefaultToken = (tokenType: "AdminAuth" | "UserAuth") => {
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem(tokenType) || "";
};