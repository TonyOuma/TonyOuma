import { Typography } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../../../shared/components/Button/Button";

import { StyledContactBox } from "./styles";

const Contact: React.FC<{}> = () => {
  return (
    <StyledContactBox>
      <Typography>What's Next</Typography>
      <Typography className="title">Get In Touch</Typography>

      <Typography>
        I'm currently looking for any new opportunities and my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </Typography>

      <ButtonComponent>Say Hello</ButtonComponent>
    </StyledContactBox>
  );
};

export default Contact;
