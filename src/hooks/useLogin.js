import healthClinicRequestManager from "../healthClinicRequestManager";

export const requestLogin = async (userLogin) => {
  const response = await healthClinicRequestManager.userLogin(userLogin);

  return response;
};
