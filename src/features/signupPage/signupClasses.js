import { makeStyles } from "@material-ui/core";
import background from "@assets/background.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: { paddingBottom: "5px" },

  text: { fontFamily: "Comfortaa", fontSize: "40px", color: "#5C5C5F" },

  loginButton: {
    backgroundColor: "#5C4DB1",
    borderRadius: "20px",
    fontSize: "25px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#FFFFFF",
    width: "250px",
    height: "60px",
  },

  backHomeButton: {
    backgroundColor: "#fbfbfb",
    borderRadius: "20px",
    border: "solid",
    borderColor: "#5C4DB1",
    fontSize: "20px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#5C4DB1",
    width: "200px",
    height: "50px",
  },

  signupButton: {
    backgroundColor: "#5C4DB1",
    borderRadius: "20px",
    fontSize: "20px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#FFFFFF",
    width: "200px",
    height: "50px",
  },

  signUpTextButton: {
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#5C4DB1",
  },

  signUptext: {
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
  },

  container: {
    height: "100%",
    backgroundColor: "#5C4DB1",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0",
  },

  signupBox: {
    width: "600px",
    height: "850px",
    backgroundColor: "#FBFBFB",
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
