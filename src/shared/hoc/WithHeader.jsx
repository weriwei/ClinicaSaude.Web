import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "@components/navBar/NavBar";

const WithHeader = (WrappedComponent) => {
  return function ({ history }) {
    return (
      <>
        <Grid container direction="column" item>
          <NavBar />
          <WrappedComponent />
        </Grid>
      </>
    );
  };
};

export default WithHeader;
