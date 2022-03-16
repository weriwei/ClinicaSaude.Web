import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  formsContainer: {
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    border: "2px",
  },
}));

export default useStyles;
