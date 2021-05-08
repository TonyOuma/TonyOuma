import { makeStyles, Theme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { colors } from "../../../theme/theme";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderLeft: `2px solid ${colors.lightNavy}`,
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
}));

export const StyledTab = styled(Tab)`
  text-transform: none;
  text-align: start;
  min-height: 35px;
  padding: 0 20px 2px;
`;
