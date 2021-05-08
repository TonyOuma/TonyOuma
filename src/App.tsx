import { StylesProvider, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Switch } from "react-router-dom";
import { appTheme } from "./theme/theme";
import HomePage from "./views";

const App: React.FC<{}> = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <Switch>
          <HomePage />
        </Switch>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
