import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "static",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C4DB1",
  },

  title: {
    fontSize: 28,
    fontFamily: "Poppins",
  },

  gridTitle: {
    marginTop: "30px",
  },

  container: {
    width: "100%",
    paddingRight: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
  },

  buttons: {
    textTransform: "none",
    margin: "5px",
    color: "#ffff",
    "&:hover": {
      border: `1px solid`,
    },
  },
}));

export default useStyles;
