import { create } from "jss";
import rtl from "jss-rtl";
import { jssPreset, StylesProvider } from "@mui/styles";

interface IProps {
  children: JSX.Element;
  disableRTL?: boolean;
}

const RTLProvider: React.FC<IProps> = (props) => {
  // Configure JSS
  const plugins = [...jssPreset().plugins];

  if (!props.disableRTL) {
    plugins.push(rtl());
  }

  return (
    <StylesProvider jss={create({ plugins })}>{props.children}</StylesProvider>
  );
};

export default RTLProvider;
