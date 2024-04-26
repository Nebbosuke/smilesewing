import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { Link as Scroll } from "react-scroll";

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

const ButtonGroups = () => {
  return (
    <ButtonGroup variant="text" size="small" aria-label="small button group">
      <Scroll to="intro" smooth={true}>
        <ThemeProvider theme={theme}>
          <Button color="ochre">講師紹介</Button>
        </ThemeProvider>
      </Scroll>
      <Scroll to="selection" smooth={true}>
        <ThemeProvider theme={theme}>
          <Button color="ochre">レッスン</Button>
        </ThemeProvider>
      </Scroll>
      <Scroll to="gallery" smooth={true}>
        <ThemeProvider theme={theme}>
          <Button color="ochre">ギャラリー</Button>
        </ThemeProvider>
      </Scroll>
      <Scroll to="contact" smooth={true}>
        <ThemeProvider theme={theme}>
          <Button color="ochre">お問い合わせ</Button>
        </ThemeProvider>
      </Scroll>
    </ButtonGroup>
  );
};

export default ButtonGroups;
