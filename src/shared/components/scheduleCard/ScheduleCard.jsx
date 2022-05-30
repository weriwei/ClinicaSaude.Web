import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import * as moment from "moment";
import "moment/locale/pt-br";
import useStyles from "./scheduleCardClasses";

const ScheduleCard = ({ schedule, onClick }) => {
  const classes = useStyles();
  moment.locale("pt-br");

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
              {moment.utc(schedule).format("DD MMMM YYYY - HH:mm a")}
            </Typography>
          }
        />
      </CardActionArea>
    </Card>
  );
};

export default ScheduleCard;
