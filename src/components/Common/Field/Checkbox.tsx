import React from 'react';
import { CheckboxProps } from '@mui/material';
import { FieldProps } from 'formik';
import { CheckboxKit } from '../../Kit/Checkbox';

interface IBaseInputProps extends CheckboxProps {
  label: any;
}

type Props = IBaseInputProps & FieldProps;

const CheckboxField: React.FC<Props> = (props) => {
  const { field, form, checked, ...rest } = props;

  return <CheckboxKit {...field} {...(checked && { checked: checked })} color="primary" {...rest} />;
};

export default CheckboxField;

CheckboxField.defaultProps = {};

CheckboxField.displayName = 'CheckboxField basic input';
