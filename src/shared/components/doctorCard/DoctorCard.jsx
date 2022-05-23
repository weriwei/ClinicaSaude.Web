import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Typography,
} from "@material-ui/core";
import useStyles from "./doctorCardClasses";

const DoctorCard = ({ name, speciality, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>
        <CardHeader
          avatar={
            <Avatar
              src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
              alt="logo"
            />
          }
          title={
            <Typography className={classes.title}>
              Dr(a). {name} - {speciality}
            </Typography>
          }
        />
      </CardActionArea>
    </Card>
  );
};

export default DoctorCard;
