import React, { useState } from "react";
import Login from "@features/loginPage/Login";
import Signup from "@features/signupPage/Signup";

const UserContent = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? (
        <Login login={login} setLogin={setLogin} />
      ) : (
        <Signup login={login} setLogin={setLogin} />
      )}
    </>
  );
};

export default UserContent;
