import api from "../utils/interceptor.js";

const updateUserDetails = async (userData) => {
  try {
    const response = await api.put("/user/update-user", userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
};

export default { updateUserDetails };
