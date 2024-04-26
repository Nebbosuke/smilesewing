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

type JumpProps = {
  id: string;
  value: string;
};

const Jump: React.FC<JumpProps> = ({ id, value }) => {
  return (
    <Scroll to={id} smooth={true}>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="inherit">
          <div className="text-xs">{value}</div>
        </Button>
      </ThemeProvider>
    </Scroll>
  );
};

export default Jump;
