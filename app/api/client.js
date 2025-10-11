import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.4:9000/api",
  timeout:2000,
});

export default apiClient;