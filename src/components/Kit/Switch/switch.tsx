import React from "react";
import { SwitchProps, Typography, Grid, Theme, Switch } from "@mui/material";
import { withStyles } from "@mui/styles";
import RTLProvider from "../../RTL";

interface IBaseInputProps extends SwitchProps {
  label?: React.ReactNode;
  secondaryLabel?: React.ReactNode;
}

const AntSwitch = withStyles((theme: Theme) => ({
  root: {
    width: 46,
    height: 26,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[300],
    "&$checked": {
      transform: "translateX(20px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.dark,
        border: "none",
      },
    },
  },
  thumb: {
    width: 22,
    height: 22,
    boxShadow: "0 2px 2px rgb(0 0 0 / 24%)",
    backgroundColor: "#fff",
  },
  track: {
    borderRadius: "1000rem",
    opacity: 1,
    border: `2px solid #e6e6e6`,
    backgroundColor: "#fff",
  },
  checked: {},
}))(Switch);

const SwitchKit: React.FC<IBaseInputProps> = (props) => {
  const { label, secondaryLabel, ...rest } = props;

  return (
    <RTLProvider disableRTL>
      <Typography
        style={{ userSelect: "none" }}
        unselectable={"off"}
        variant={"caption"}
        component="div"
      >
        <Grid
          component="label"
          container
          alignItems="center"
          spacing={1}
          className="customSwitch"
        >
          <Grid item>{secondaryLabel}</Grid>
          <Grid item>
            <AntSwitch color="primary" {...rest} />
          </Grid>
          <Grid className="secondaryLabel" item>
            {label}
          </Grid>
        </Grid>
      </Typography>
    </RTLProvider>
  );
};

export default SwitchKit;

SwitchKit.defaultProps = {};

SwitchKit.displayName = "SwitchKit";
