import { ThemeProvider } from "@mui/styles";
import React from "react";
import RTLProvider from "../components/RTL";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import BaseLayout from "./BaseLayout";
import { MainRoute } from "../route";
import { QueryClient, QueryClientProvider } from "react-query";

interface IProps {}

const MainApp: React.FC<IProps> = (props) => {
  const theme = responsiveFontSizes(createTheme({}));
  const queryClient = new QueryClient();

  return (
    <RTLProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BaseLayout>
            <MainRoute />
          </BaseLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </RTLProvider>
  );
};

export default MainApp;
