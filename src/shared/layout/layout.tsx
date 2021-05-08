/* eslint-disable no-restricted-globals */
import React, { FC, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { appTheme } from "../../theme/theme";
import { GlobalStyle } from "../../theme/GlobalStyles";
import { Box } from "@material-ui/core";
import SocialMedia from "./content/social";

// interface ILayoutProps {
//   location: any;
// }

const Layout: FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const isHome = location.pathname === "/";
  const [isLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      {/* <Head /> */}
      <div>
        <ThemeProvider theme={appTheme}>
          <GlobalStyle />

          {/* {isLoading && isHome ? (

          )} */}
          <Box>{children}</Box>
          <SocialMedia />
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
