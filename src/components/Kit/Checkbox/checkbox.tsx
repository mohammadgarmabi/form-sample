import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Checkbox, CheckboxProps , FormControlLabel  } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  formControlLabelRoot: {
    userSelect: "none",
    transition: "0.3s all ease",
    "& > .Mui-checked + *": {
      fontWeight: "500",
    },
    "& span": {
      fontSize: "1.4rem !important",
    },

    margin: 0,
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& input": {
      display: "none",
    },
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    borderRadius: 2,
    width: 20,
    height: 20,
    border: "solid 1px",
    backgroundColor: theme.palette.common.white,
    borderColor: "#d9d9d9",
    transition: "all .3s",

    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      boxShadow: "0 2px 4px rgb(0 0 0 / 15%)",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
      cursor: "not-allowed",
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.common.white,
    "&:before": {
      content: '""',
      display: "block",
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.996' height='7.358' viewBox='0 0 10.996 7.358'%3E%3Cpath d='M16.875,10l-5.547,5.547L8,12.219' transform='translate(-6.939 -8.939)' fill='none' stroke='%23671cc9' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E\")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginRight: "1px",
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

interface ICheckboxProps extends CheckboxProps {
  label: React.ReactNode;
}

// Inspired by blueprintjs
const CheckboxKit = (props: ICheckboxProps) => {
  const { label, ...rest } = props;
  const classes = useStyles();

  return (
    <FormControlLabel
      classes={{ root: classes.formControlLabelRoot }}
      control={
        <Checkbox
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)} />
          }
          icon={<span className={classes.icon} />}
          inputProps={{ "aria-label": "decorative checkbox" }}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default CheckboxKit;
