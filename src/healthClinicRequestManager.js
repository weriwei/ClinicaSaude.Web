import healthClinicRequestService from "./healthClinicRequestService";

class healthClinicRequestManager {
  userLogin = async (userData) => {
    healthClinicRequestService.userLogin(userData);
  };
}

export default new healthClinicRequestManager();
