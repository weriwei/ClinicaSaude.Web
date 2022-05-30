import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "50px",
  },

  box: {
    width: "90vw",
    height: "75vh",
    borderRadius: 30,
    backgroundColor: "#5c4db1",
    display: "flex",
  },

  text: { fontFamily: "Comfortaa", fontSize: "40px", color: "white" },
}));

export default useStyles;
