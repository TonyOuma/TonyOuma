import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {} from "react-feather";
import { colors } from "../../../theme/theme";
import { StyledTab, useStyles } from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const JobsSection: React.FC<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box style={{ maxWidth: 700, margin: "0 auto" }}>
      <Typography variant="h4" style={{ paddingBottom: 40 }}>
        Where I have worked
      </Typography>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              left: 0,
              background: colors.green,
            },
          }}
        >
          <StyledTab label="Fintech Group" {...a11yProps(0)} />
          <StyledTab label="BRCK" {...a11yProps(2)} />

          <StyledTab label="HNG Tech" {...a11yProps(1)} />
          <StyledTab label="Item Four" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h3>
            <span>Software Developer Intern</span>
            <span className="company">
              &nbsp;@&nbsp;
              <a href="hello" className="inline-link">
                Fintech
              </a>
            </span>
          </h3>

          <p className="range">range</p>
          {/*  */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </Box>
  );
};

export default JobsSection;
