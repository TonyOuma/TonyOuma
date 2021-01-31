import React, { FC } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

import { colors, fontSizes } from "../../../theme/theme";
const useStyles = makeStyles({
  root: {
    marginTop: 50,
    color: colors.green,
    border: `1px solid ${colors.green}`,
    padding: "1.25rem 1.75rem",
    fontSize: fontSizes.font_sm,
    lineHeight: 1,
    textDecoration: "none",
    textTransform: "capitalize",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: colors.greenTint,
    },
    "&:after": {
      display: "none !important",
    },
  },
});

const ButtonComponent: FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button className={classes.root} {...rest}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.any,
};

export default ButtonComponent;
