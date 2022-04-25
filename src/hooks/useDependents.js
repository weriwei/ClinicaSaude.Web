import healthClinicRequestManager from "../healthClinicRequestManager";

export const handleRegister = async (dependentData, userId) => {
  const response = await healthClinicRequestManager.dependentSignup(
    dependentData,
    userId
  );

  return response;
};

export const getDependents = async (userId) => {
  const response = await healthClinicRequestManager.getDependents(userId);

  return response;
};
