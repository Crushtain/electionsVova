import axios from "../axios";

export const updateDefaultToken = (tokenType: "AdminAuth" | "ItmoIdAuth") => {
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem(tokenType) || "";
};