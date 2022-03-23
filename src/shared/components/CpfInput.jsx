import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

const NumberFormatCustom = (props) => {
  const { onChange, inputRef, value, ...other } = props;

  return (
    <NumberFormat
      allowLeadingZeros
      getInputRef={inputRef}
      allowNegative={false}
      isNumericString
      format="###.###.###-##"
      type="text"
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      {...other}
    />
  );
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

NumberFormatCustom.defaultProps = {
  value: "",
};

const CpfInput = ({ setUserData, userData }) => {
  const handleOnChange = (event) => {
    setUserData({ ...userData, document: event.target.value });
  };
  return (
    <TextField
      label="CPF"
      variant="standard"
      margin="dense"
      required
      value={userData.document}
      onChange={handleOnChange}
      fullWidth
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
};

export default CpfInput;
