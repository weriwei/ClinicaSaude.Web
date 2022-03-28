import healthClinicRequestService from "./healthClinicRequestService";

class healthClinicRequestManager {
  userLogin = async (userData) => {
    healthClinicRequestService.userLogin(userData);
  };

  userSignup = async (userData) => {
    const payload = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      documentNumber: userData.documentNumber,
      gender: userData.gender,
      birthday: userData.birthday,
      address: {
        street: userData.street,
        number: userData.number,
        complement: userData.complement,
        district: userData.district,
        city: userData.city,
        zipcode: userData.zipcode,
      },
    };
    healthClinicRequestService.userSignup(payload);
  };
}

export default new healthClinicRequestManager();
