import api from "../utils/interceptor";
import axios from "axios";

const baseURL = "http://localhost:3000";

const Register = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Login = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Logout = async (id) => {
  try {
    const response = await api.post("/auth/logout/", { id });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default {
  Register,
  Login,
  Logout,
};
