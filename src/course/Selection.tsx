import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import SelectOne from "./selectOne";
import SelectTwo from "./selectTwo";
import SelectThree from "./selectThree";
import SelectFour from "./selectFour";
import React, { useLayoutEffect, useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link as Scroll } from "react-scroll";
import ReturnTop2 from "../component/ReturnTop2";
import Jump from "../component/Jump";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E9DB5D",
    },
  },
});

const Selection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const useWindowSize = (s: number): boolean => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateSize = (): void => {
        setSize(window.innerWidth);
      };

      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }, []);
    if (size > s) {
      return true;
    }
    return false;
  };

  return (
    <section
      id="selection"
      className="text-black bg-gradient-to-bl from-orange-100 via-white to-orange-100 py-12"
    >
      <div className="container flex flex-col mx-auto items-center px-5 py-10">
        <p className="flex flex-row w-full md:text-5xl text-2xl text-left mb-6 gap-3">
          <div className="flex flex-row w-9/12">
            <MenuBookIcon fontSize="inherit" color="warning" />
            <p>レッスンコース</p>
          </div>
          {/* <div className="w-1/2 flex justify-end">
            <Jump id={"top"} value={"トップへ"} />
          </div> */}
        </p>
        <p>選べる４つのコース</p>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {useWindowSize(1024) && (
            <Tabs
              value={value}
              onChange={handleChange}
              // variant="scrollable"
              // scrollButtons
              // allowScrollButtonsMobile
              aria-label="basic tabs example"
              sx={{
                width: "auto",
              }}
            >
              <Tab label={"自由レッスンコース"} {...a11yProps(0)} />
              <Tab label={"基礎レッスンコース"} {...a11yProps(1)} />
              <Tab label={"子供服レッスンコース"} {...a11yProps(2)} />
              <Tab label={"着物リメイクレッスンコース"} {...a11yProps(3)} />
            </Tabs>
          )}
          {!useWindowSize(1024) && (
            <Tabs
              value={value}
              onChange={handleChange}
              // variant="scrollable"
              // scrollButtons
              // allowScrollButtonsMobile
              aria-label="basic tabs example"
              sx={{
                width: "auto",
              }}
            >
              <Tab
                label={
                  <LooksOneIcon
                    fontSize="medium"
                    color="primary"
                  ></LooksOneIcon>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <LooksTwoIcon
                    fontSize="medium"
                    color="secondary"
                  ></LooksTwoIcon>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <Looks3Icon fontSize="medium" color="success"></Looks3Icon>
                }
                {...a11yProps(2)}
              />
              <Tab
                label={
                  <Looks4Icon fontSize="medium" color="error"></Looks4Icon>
                }
                {...a11yProps(3)}
              />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SelectOne />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SelectTwo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SelectThree />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <SelectFour />
        </CustomTabPanel>
        <div className="w-full flex flex-col py-5">
          <div className="py-3 flex  md:flex-row flex-col items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-1/3 pb-6 md:flex justify-center">
              <Scroll to="contact" smooth={true}>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="ochre">
                    お問い合わせ
                  </Button>
                </ThemeProvider>
              </Scroll>
            </div>
            <div className="md:w-1/3 text-lg md:flex pb-3 items-center justify-end">
              {/* <Jump id={"selection"} value="ちょっと上へ" /> */}
              {/* <Scroll to="selection" smooth={true}>
              <ThemeProvider theme={theme}>
                <Button variant="outlined" color="inherit">
                  <div className="text-xs">
                    <ArrowUpwardIcon />
                  </div>
                </Button>
              </ThemeProvider>
            </Scroll> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Selection;
