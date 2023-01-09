import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, options = []) => {
  const respond = await request.get(path, options);
  return respond.data;
};

export default request;
