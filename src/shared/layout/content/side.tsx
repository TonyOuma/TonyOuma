import React, { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../../theme/theme";

// interface ISideProps {
//   //   isHome: boolean;
//   orientation: string;
// }

const StyledSideElement = styled(Box)`
  width: 40px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  color: ${colors.lightSlate};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side: FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  return <StyledSideElement>{children}</StyledSideElement>;
};

Side.propTypes = {
  children: PropTypes.any,
};

export default Side;
