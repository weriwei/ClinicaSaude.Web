import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: { paddingBottom: "20px" },

  text: { fontFamily: "Comfortaa", fontSize: "50px", color: "#5C5C5F" },

  loginButton: {
    backgroundColor: "#5C4DB1",
    borderRadius: "20px",
    fontSize: "30px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#FFFFFF",
    width: "300px",
    height: "65px",
  },

  signUpButton: {
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
  },

  container: {
    paddingTop: "120px",
    backgroundColor: "#E5E5E5",
    height: "600px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  loginBox: {
    width: "800px",
    height: "750px",
    backgroundColor: "#FBFBFB",
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
