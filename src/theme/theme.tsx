import { createMuiTheme } from "@material-ui/core/styles";

export enum fontSizes {
  font_xss = "12px",
  font_xs = "13px",
  font_sm = "14px",
  font_md = "16px",
  font_lg = "18px",
  font_xl = "20px",
  font_xxl = "22px",
  font_heading = "32px",
}

export interface IColors {
  darkNavy: string;
  navy: string;
  lightNavy: string;
  lightestNavy: string;
  navyShadow: string;
  slate: string;
  lightSlate: string;
  lightestSlate: string;
  white: string;
  green: string;
  greenTint: string;
}

export const colors: IColors = {
  darkNavy: "#020c1b",
  navy: "#0a192f",
  lightNavy: "#112240",
  lightestNavy: "#233554",
  navyShadow: "rgba(2, 12, 27, 0.7)",
  slate: "#8892b0",
  lightSlate: "#a8b2d1",
  lightestSlate: "#ccd6f6",
  white: "#e6f1ff",
  green: "#64ffda",
  greenTint: "rgba(100, 255, 218, 0.1)",
};

export const appTheme = createMuiTheme({
  palette: {
    //
  },
  typography: {
    // fontFamily:
    h2: {
      //
    },
    // body1: {
    // },
  },
});
