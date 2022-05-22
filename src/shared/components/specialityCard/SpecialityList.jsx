import React from "react";
import SpecialityCard from "@components/specialityCard/SpecialityCard";
import { Grid } from "@material-ui/core";

const SpecialityList = ({ specialitys = [], onSelectSpeciality }) => {
  return (
    <Grid container item xs={9} spacing={10}>
      {specialitys &&
        specialitys?.map((speciality) => (
          <Grid item xs={5} key={speciality.id}>
            <SpecialityCard
              title={speciality.name}
              description={speciality.description}
              onClick={() => onSelectSpeciality(speciality.id)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default SpecialityList;
