import { createGlobalStyle } from "styled-components";
import { colors, fontSizes } from "./theme";

export const GlobalStyle = createGlobalStyle`

body {
color: ${colors.slate};
font-size: ${fontSizes.font_xl};
line-height: 1.3;
width: 100%;
background-color: ${colors.navy};
overflow-x: hidden;
}


h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    color: ${colors.lightestSlate};
    line-height: 1.1;
}

main {
    margin: 0 auto;
    max-width: 1600px;
    padding: 200px 150px;

    &.fillHeight {
        padding: 0 150px;
    }
}

`;
