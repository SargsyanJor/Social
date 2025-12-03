import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

export const SocialApi = {
  getUsers(page = 1) {
    return instance.get(`/users?count=50&page=${page}`);
  },
  login(body) {
    return instance.post("/auth/login", body);
  },
  profileUsers(userId) {
    return instance.get(`/profile/${userId}`);
  },
};
