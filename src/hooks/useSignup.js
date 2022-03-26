import healthClinicRequestManager from "../healthClinicRequestManager";

export const requestSignup = async (userData) => {
  const response = await healthClinicRequestManager.userSignup(userData);

  return response;
};
