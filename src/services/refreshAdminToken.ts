import axios from "../axios";

export const refreshAdminToken = async (refresh) => {
  try {
    const response = await axios.post("api/token/refresh/", {
      refresh
    });

    return response.data;
  } catch (e) {
    console.error(e);
  }
};