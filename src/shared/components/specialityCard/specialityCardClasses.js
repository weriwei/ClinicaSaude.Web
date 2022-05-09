import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
    color: "#5C4DB1",
  },

  userText: {
    fontSize: "14px",
    fontFamily: "Comfortaa",
    textTransform: "none",
  },

  container: {
    display: "flex",
  },

  Box: {
    width: "550px",
    height: "100px",
    backgroundColor: "#FBFBFB",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10px",
  },
}));

export default useStyles;
