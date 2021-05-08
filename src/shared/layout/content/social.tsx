import { Link, List, ListItem } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { colors } from "../../../theme/theme";
import Icon from "../../components/icons/icons";
import { socialMedia } from "../../data/socialMediaLinks";
import Side from "./side";

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
  left: 40px;

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

const StyledListItem = styled(ListItem)`
  height: 40px;
  width: auto;
`;

const StyledLink = styled(Link)`
  color: ${colors.lightSlate};
`;

const SocialMedia: React.FC<{}> = () => {
  //   const { isHome } = props;
  return (
    <Side>
      <StyledList>
        {socialMedia?.map(({ url, name }, i) => (
          <StyledListItem button>
            <StyledLink href={url} aria-label={name}>
              <Icon name={name} />
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </Side>
  );
};

export default SocialMedia;
