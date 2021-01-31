import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Side from "./side";
import { List, ListItem } from "@material-ui/core";
import { colors } from "../../../theme/theme";
import { socialMedia } from "../../data/socialMediaLinks";
import Icon from "../../components/icons/icons";
// import { Link } from "react-router-dom";

// interface IProps {
//   isHome: boolean;
// }

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }

  /* ListItem {
    &:last-of-type {
      margin-bottom: 20px;
    }
  } */
`;

const StyledIcon = styled(Icon)`
  height: 50px;
  width: auto;
`;

const SocialMedia: React.FC<{}> = () => {
  //   const { isHome } = props;
  return (
    <Side>
      <StyledList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <ListItem key={i}>
              {/* <Link to="/">ti</Link> */}
              <StyledIcon name={name} />
            </ListItem>
          ))}
      </StyledList>
    </Side>
  );
};

export default SocialMedia;
