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

  getDependents = async (userId) => {
    try {
      const response = await api.get(`api/v1/Dependent/${userId}`);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  dependentSignup = async (dependentData) => {
    try {
      const response = await api.post("api/v1/Dependent/signup", dependentData);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };
}

export default new healthClinicRequestService();
