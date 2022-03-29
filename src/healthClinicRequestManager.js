import healthClinicRequestService from "./healthClinicRequestService";

class healthClinicRequestManager {
  userLogin = async (userData) => {
    return healthClinicRequestService.userLogin(userData);
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
        user_address_street: userData.street,
        user_address_number: userData.number,
        user_address_complement: userData.complement,
        user_address_district: userData.district,
        user_address_city: userData.city,
        user_address_zipcode: userData.zipcode,
      },
    };
    return healthClinicRequestService.userSignup(payload);
  };
}

export default new healthClinicRequestManager();
