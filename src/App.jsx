import React from "react";
import HealthClinicPage from "./features/HealthClinicPage";
import { Provider } from "@context/userContext";

const App = () => {
  return (
    <Provider>
      <HealthClinicPage />
    </Provider>
  );
};

export default App;
