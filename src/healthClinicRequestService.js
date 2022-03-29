import api from "./services/api";

class healthClinicRequestService {
  userLogin = async (userData) => {
    try {
      const response = await api.post("api/v1/User/login", userData);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  userSignup = async (userData) => {
    try {
      const response = await api.post("api/v1/User/signup", userData);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };
}

export default new healthClinicRequestService();
