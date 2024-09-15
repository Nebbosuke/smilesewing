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
      main: "#ffffff",
    },
  },
});

const ButtonGroups = () => {
  return (
    <div className="text-sm text-white gap-3">
      <Scroll to="intro" smooth={true} className="mr-3">
        <button className=" hover:text-yellow-300">講師紹介</button>
      </Scroll>
      <Scroll to="selection" smooth={true} className="mr-3">
        <button className=" hover:text-yellow-300">レッスン</button>
      </Scroll>
      <Scroll to="gallery" smooth={true} className="mr-3">
        <button className=" hover:text-yellow-300">ギャラリー</button>
      </Scroll>
      <Scroll to="contact" smooth={true}>
        <button className=" hover:text-yellow-300">お問い合わせ</button>
      </Scroll>
    </div>
  );
};

export default ButtonGroups;
