import React from "react";
import { FieldProps } from "formik";
import { RadioKit } from "../../Kit/Radio";
import { CheckboxProps } from "@mui/material";

interface IBaseInpurProps extends CheckboxProps {
  label: any;
}

type Props = IBaseInpurProps & FieldProps;

const RadioField: React.FC<Props> = (props) => {
  const { field, form, ...rest } = props;

  return (
    <RadioKit
      {...field}
      {...rest}
      color="primary"
      inputProps={{ "aria-label": field.name }}
    />
  );
};

export default RadioField;

RadioField.defaultProps = {};

RadioField.displayName = "RadioField basic input";
