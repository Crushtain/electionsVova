import axios from "../axios";

export const updateDefaultToken = (tokenType: "AdminAuth" | "itmoId") => {
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem(tokenType) || "";
};