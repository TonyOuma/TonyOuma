import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyles";
// import { Route, Switch } from "react-router-dom";
import { appTheme } from "./theme/theme";
import HomePage from "./views";

const App: React.FC<{}> = () => {
  return (
    <div>
      {/* <Switch> */}
      {/* <Route exact path="/"> */}
      <HomePage />
      {/* </Route> */}
      {/* </Switch> */}
    </div>
  );
};

export default App;
