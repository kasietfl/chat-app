import { axios } from "../../core";

export default {
  login: postData => axios.post("/user/login", postData),
  register: postData => axios.post("/user/register", postData),
  verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me")
};