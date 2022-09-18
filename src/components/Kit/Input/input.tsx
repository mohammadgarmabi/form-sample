import React from "react";
import {
  createStyles,
  FilledInputProps,
  TextField,
  TextFieldProps,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

interface IInputKitProps {
  textarea?: boolean;
  secondary?: boolean;
  isRequired: boolean;
}

export type TInputKit = IInputKitProps & TextFieldProps;

const useStyles = makeStyles<Theme, IInputKitProps>((theme: Theme) =>
  createStyles({
    error: {
      borderColor: theme.palette.error.main,
    },
    primary: {
      borderRadius: 4,
      "&.Mui-focused": {
        "& svg": {
          stroke: theme.palette.primary.dark,
        },
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: 1,
        borderColor: "#e3e3e3",
        boxShadow: "-1px 3px 10px 0 rgb(0 0 0 / 6%)",
      },
    },
    secondary: {
      backgroundColor: theme.palette.grey[200],
    },
    MuiInputAdornment: {
      "& svg": {
        width: "1.8rem",
        height: "1.8rem",
        stroke: theme.palette.grey[200],
        transition: "all .3s",
      },
      // 	width: '3.8rem',
      // 	height: '3.8rem',
    },
    MuiInputLabel: {
      "& label": {
        "&::after": {
          content: (props: IInputKitProps) => (props.isRequired ? '"*"' : '""'),
          fontSize: "2rem",
        },
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(9px, -6px) scale(0.75)",
      },
      "& .MuiSelect-select": {
        height: "0px",
      },
    },
    MuiSelectSelect: {},
  })
);

const InputKit: React.FC<TInputKit> = (props) => {
  const { InputProps, textarea, secondary, isRequired, ...rest } =
    props;
  const classes = useStyles({ isRequired: props.isRequired });

  return (
    <TextField
      classes={{ root: classes.MuiInputLabel }}
      InputProps={
        {
          classes: {
            error: classes.error,
            root: clsx({
              [classes.secondary]: secondary,
              [classes.primary]: !secondary,
            }),
            // :
            adornedStart: classes.MuiInputAdornment,
            ...InputProps?.classes,
          },

          ...InputProps,
        } as Partial<FilledInputProps>
      }
      multiline={textarea}
      rows={textarea ? 4 : undefined}
      {...rest}
    />
  );
};

export default InputKit;

InputKit.defaultProps = {};

InputKit.displayName = "InputKit";
