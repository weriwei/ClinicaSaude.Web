import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import br from "date-fns/locale/pt-BR";

const DateInput = ({ setUserData, userData }) => {
  const onDateChange = (date) => {
    setUserData({ ...userData, birthday: date });
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={br}>
        <KeyboardDatePicker
          value={userData.birthday}
          onChange={(date) => onDateChange(date)}
          disableFuture
          minDate
          minDateMessage="Data deve ser superior a 01/01/1900"
          inputVariant="standard"
          label="Data de nascimento"
          required
          format="dd/MM/yyyy"
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateInput;
