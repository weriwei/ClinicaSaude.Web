import React, { useContext } from "react";
import { Context } from "@context/userContext";

const HomeClinicPage = () => {
  const { userData } = useContext(Context);

  const welcome = userData.name
    ? `Bem-vindo, ${userData?.name.split(" ")[0]}!`
    : "Bem-vindo!";

  return (
    <>
      <div>{welcome}</div>
    </>
  );
};

export default HomeClinicPage;
