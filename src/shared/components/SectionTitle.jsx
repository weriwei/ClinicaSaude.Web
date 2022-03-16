import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: (props) => props.fontSize || 24,
    fontFamily: theme.typography.h3.fontFamily,
    paddingBottom: 5,
    fontWeight: 600,
    backgroundSize: "55px 3px, calc(100% - 4px) 100%",
    backgroundPosition: "left bottom, 4px 0",
  },
}));

const SectionTitle = ({ title, ...props }) => {
  const classes = useStyles(props);

  return (
    <Typography variant="subtitle1" className={classes.title}>
      {title}
    </Typography>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
