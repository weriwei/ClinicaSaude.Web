import healthClinicRequestService from "./healthClinicRequestService";

class healthClinicRequestManager {
  userLogin = async (userData) => {
    healthClinicRequestService.userLogin(userData);
  };

  userSignup = async (userData) => {
    healthClinicRequestService.userSignup(userData);
  };
}

export default new healthClinicRequestManager();
