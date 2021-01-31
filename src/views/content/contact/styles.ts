import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const StyledContactBox = styled(Box)`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 100px 0;

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
`;
