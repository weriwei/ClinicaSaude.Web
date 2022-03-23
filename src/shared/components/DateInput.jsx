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
          onChange={onDateChange}
          minDate={new Date("01/01/1900")}
          disableFuture
          format="dd/MM/yyyy"
          inputVariant="outlined"
          label="Data de nascimento"
          required
          fullWidth
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateInput;
