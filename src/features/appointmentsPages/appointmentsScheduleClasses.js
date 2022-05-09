import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "90vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    alignItems: "center",
  },

  box: {
    width: "90vw",
    height: "80vh",
    borderRadius: 20,
    backgroundColor: "#5C4DB1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
