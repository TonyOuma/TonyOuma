import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../shared/components/Button/Button";

const StyledBox = styled(Box)`
  /* max-width: 600px; */
  margin: 0 auto 100px;
  /* text-align: center; */
  padding: 100px 0;
  align-items: flex-start;

  .title1 {
    font-size: clamp(40px, 8vw, 80px);
  }
`;
const Hero: React.FC<{}> = () => {
  const one = <Typography>Hi, my name is</Typography>;
  const two = <Typography className="title1">Ouma Tony.</Typography>;
  const three = <Typography>I build fun stuff for the web.</Typography>;
  const four = (
    <Typography>
      I'm a software engineer based in Nairobi, Kenya specializing in building
      exceptional websites, applications, and everything in between.
    </Typography>
  );

  const five = <ButtonComponent>Get In Touch</ButtonComponent>;

  const items = [one, two, three, four, five];

  return (
    <StyledBox>
      {items.map((item, i) => (
        <Box>{item}</Box>
      ))}
    </StyledBox>
  );
};

export default Hero;
