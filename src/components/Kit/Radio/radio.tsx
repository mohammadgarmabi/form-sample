import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Radio, RadioProps, FormControlLabel } from "@mui/material";

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
    borderRadius: "50%",
    width: 20,
    height: 20,
    border: "solid 1px",
    backgroundColor: theme.palette.common.white,
    // backgroundImage:
    //   "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
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
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
    // backgroundImage:
    //   "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      content: '""',
      display: "block",
      width: 20,
      height: 20,
      backgroundImage: "radial-gradient(#1a3ded,#1a3ded 28%,transparent 32%)",
      backgroundPosition: "-1px -1px",
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

interface IRadioProps extends RadioProps {
  label: React.ReactNode;
  value: string;
}

// Inspired by blueprintjs
const RadioKit = (props: IRadioProps) => {
  const { label, value, ...rest } = props;
  const classes = useStyles();

  return (
    <FormControlLabel
      classes={{ root: classes.formControlLabelRoot }}
      value={value}
      control={
        <Radio
          className={classes.root}
          disableRipple
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

export default RadioKit;
