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

  getSpecialitys = async () => {
    try {
      const response = await api.get("api/v1/speciality");

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  getDoctorsBySpecialityId = async (id) => {
    try {
      const response = await api.get(`api/v1/speciality/doctor/${id}`);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  getSchedulesByDoctorId = async (id) => {
    try {
      const response = await api.get(`api/v1/schedule/${id}`);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  createAppointment = async (appointment) => {
    try {
      const response = await api.post("api/v1/appointment", appointment);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };

  getAppointmentsByPatientId = async (idPatient) => {
    try {
      const response = await api.get(`api/v1/appointment/${idPatient}`);

      return response;
    } catch (error) {
      return {
        error,
      };
    }
  };
}

export default new healthClinicRequestService();
