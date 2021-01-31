import React from "react";

import {
  GitHub,
  Linkedin,
  Instagram,
  Twitter,
  Codepen,
  Folder,
} from "react-feather";

interface IconProps {
  name: string;
  size?: number;
}
const Icon: React.FC<IconProps> = (props) => {
  const { name, size } = props;

  switch (name) {
    case "GitHub":
      return <GitHub />;
    case "Linkedin":
      return <Linkedin />;
    case "Instagram":
      return <Instagram />;
    case "Twitter":
      return <Twitter />;
    case "Codepen":
      return <Codepen />;
    case "Folder":
      return <Folder />;
    default:
      return <Codepen />;
  }
};
export default Icon;
