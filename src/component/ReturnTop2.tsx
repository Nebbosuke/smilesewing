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

const ReturnTop = () => {
  return (
    <Scroll to="top" smooth={true}>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="inherit">
          <div className="text-xs">トップへもどる</div>
        </Button>
      </ThemeProvider>
    </Scroll>
  );
};

export default ReturnTop;
