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
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  Box: {
    width: "800px",
    height: "100px",
    backgroundColor: "#FBFBFB",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
  },
}));

export default useStyles;
