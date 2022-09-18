import React from "react";
import { SwitchProps } from "@mui/material";
import { FieldProps } from "formik";
import { SwitchKit } from "../../Kit/Switch";

interface IBaseInputProps extends SwitchProps {
  label: any;
}

type Props = IBaseInputProps & FieldProps;

const SwitchField: React.FC<Props> = (props) => {
  const { field, form, onChange, ...rest } = props;

  return (
    <SwitchKit
      {...field}
      color="primary"
      {...rest}
      onChange={(e: any, checked: boolean) => {
        field.onChange(e);
        if (onChange) {
          onChange(e, checked);
        }
      }}
    />
  );
};

export default SwitchField;

SwitchField.defaultProps = {};

SwitchField.displayName = "SwitchField basic input";
