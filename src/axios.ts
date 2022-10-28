import axios from "axios";

const instance = axios.create({
  baseURL: 'http://178.154.231.200'
})

export default instance
