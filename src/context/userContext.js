import React, { useState, createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    gender: "",
    document: "",
    birthday: "",
    address: {
      user_Address_City: "",
      user_Address_Complement: "",
      user_Address_District: "",
      user_Address_Number: "",
      user_Address_Street: "",
      user_Address_ZipCode: "",
    },
  });

  const getActiveStep = () => {
    if (!authenticated) return 1;
    if (authenticated) return 2;
  };

  const logout = () => {
    setAuthenticated(false);
    setUserData({});
  };

  const handleAuthenticate = (response) => {
    setUserData({
      id: response.data.id,
      name: response.data.name,
      gender: response.data.gender,
      birthday: response.data.birthday,
      document: response.data.document,
      address: response.data.address,
    });
  };

  const getUserId = () => userData.id;

  return (
    <Context.Provider
      value={{
        authenticated,
        getActiveStep,
        userData,
        setAuthenticated,
        handleAuthenticate,
        getUserId,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
