import { Breakpoint, Container } from "@mui/material";
import React from "react";

interface IProps {
  children: JSX.Element;
  maxWidth?: Breakpoint;
}

const BaseLayout: React.FC<IProps> = (props) => {
  return (
    <Container maxWidth={props.maxWidth || "md"}>{props.children}</Container>
  );
};

export default BaseLayout;
