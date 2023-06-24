import axios from "axios";
const AUTH_ENDPOINT = "http://localhost:8002";
const PROFILE_ENDPOINT = "http://localhost:8003";
const REGISTER_URL = "/api/v1/auth/users/";
const LOGIN_URL = "/api/v1/auth/jwt/create/";
const ACTIVATE_URL = "/api/v1/auth/users/activation/";

// Register user
const register = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    AUTH_ENDPOINT + REGISTER_URL,
    userData,
    config
  );
  return response.data;
};

// Login user

const login = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    AUTH_ENDPOINT + LOGIN_URL,
    userData,
    config
  );
  if (response.data) {
    const responseData = JSON.stringify(response.data);
    localStorage.setItem("user", responseData);
    localStorage.setItem("token", "Bearer " + response.data.access);
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const activate = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    AUTH_ENDPOINT + ACTIVATE_URL,
    userData,
    config
  );
  return response.data;
};

const authService = { register, login, logout, activate };

export default authService;
