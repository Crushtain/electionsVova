import axios from "../axios";

export const refreshAdminToken = async () => {
  const refresh = localStorage.getItem('refresh-admin');
  try {
    const response = await axios.post("api/token/refresh/", {
      refresh
    });
    localStorage.setItem('access-admin', response.data.access);
    localStorage.setItem('refresh-admin', response.data.refresh);

  } catch (e) {
    console.error(e);
  }
};