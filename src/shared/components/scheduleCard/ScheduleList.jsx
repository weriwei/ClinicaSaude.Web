import React from "react";
import { Grid } from "@material-ui/core";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({ schedules, onSelectSchedule }) => {
  return (
    <Grid container item xs={10} spacing={6}>
      {schedules &&
        schedules?.map((schedule) => (
          <Grid item xs={6} key={schedule.id}>
            <ScheduleCard
              schedule={schedule.date}
              onClick={() => onSelectSchedule(schedule.id)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ScheduleList;
