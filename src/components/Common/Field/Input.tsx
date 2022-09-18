import React from "react";
import { TextFieldProps } from "@mui/material";
import { FieldProps } from "formik";
import { InputKit } from "../../Kit/Input";

interface IFormInputFieldProps {
  normalize?: (val: string) => string;
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  halfBorderRadius?: boolean;
  placeholder?: string;
}
type Props = IFormInputFieldProps & TextFieldProps & FieldProps;

const InputField: React.FC<Props> = (props) => {
  const { field, form, normalize, placeholder, ...rest } = props;

  const filedError = form["errors"]
    ? (form["errors"][field.name] as string)
    : "";
  const filedTouched = form["touched"]
    ? (form["touched"][field.name] as boolean)
    : false;

  return (
    <>
      <InputKit
        isRequired={false}
        error={!!(filedError && filedTouched)}
        helperText={filedTouched && filedError}
        rows={rest.multiline ? 4 : undefined}
        {...rest}
        {...field}
        name={field.name}
        value={field.value || ""}
        placeholder={placeholder || ""}
        type={rest.type}
        onChange={(e: any) => {
          if (normalize) {
            form.setFieldValue(field.name, normalize(e.target.value), true);
            return;
          }
          if (rest.onChange) {
            rest.onChange(e);
          }
          field.onChange(e);
        }}
        InputProps={{
          ...rest.InputProps,
          "aria-label": "weight",
          endAdornment: rest.InputProps?.endAdornment,
        }}
      />
    </>
  );
};

export default InputField;

InputField.defaultProps = {
  fullWidth: true,
};

InputField.displayName = "InputField formik input";
