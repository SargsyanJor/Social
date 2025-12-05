import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers : {
    "api-key" : "4d7ca5b6-0116-43d4-93ff-bb839e04f0f6"
  },
  withCredentials: true
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
  changeImg(file) {
    const files  = new FormData()
    files.append("file",file)
    return instance.put("/profile/photo",files);
  },
};
