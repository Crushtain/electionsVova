import axios from "../axios";

export const refreshAdminToken = async (refresh) => {
  try {
    const response = await axios.post("api/token/refresh/", {
      refresh
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};