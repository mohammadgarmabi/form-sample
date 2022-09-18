import { Tab, Tabs } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import BlockIcon from "@mui/icons-material/Block";
import HeadsetOffIcon from "@mui/icons-material/HeadsetOff";

interface IProps {}

const TabsForm: React.FC<IProps> = (props) => {
  const [tabIndex, setTabIndex] = React.useState<Number>(0);

  return (
    <Tabs
      value={tabIndex}
      onChange={(_, newValue) => setTabIndex(newValue)}
      aria-label="basic tabs"
    >
      <Tab label="General" icon={<SettingsIcon />} iconPosition="start" />
      <Tab
        label="Take Offline"
        icon={<HeadsetOffIcon />}
        iconPosition="start"
        disabled={true}
      />
      <Tab
        label="Block Users"
        icon={<BlockIcon />}
        iconPosition="start"
        disabled={true}
      />
    </Tabs>
  );
};

export default TabsForm;
