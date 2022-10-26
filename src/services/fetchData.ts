import axios from "../axios";

export const fetchData = async (path: string, params?: { [param: string]: string }) => {
  try {
    console.log(111);
    const response = await axios.get(path, {
      params
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};