import React from "react";
import {
  Codepen,
  Folder,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";

interface IconProps {
  name: string;
  // size?: number;
}
const Icon: React.FC<IconProps> = (props) => {
  const { name } = props;

  switch (name) {
    case "GitHub":
      return <GitHub size={24} />;
    case "Linkedin":
      return <Linkedin size={24} />;
    case "Instagram":
      return <Instagram size={24} />;
    case "Twitter":
      return <Twitter size={24} />;
    case "Codepen":
      return <Codepen size={24} />;
    case "Folder":
      return <Folder size={24} />;
    default:
      return <Codepen size={24} />;
  }
};
export default Icon;
