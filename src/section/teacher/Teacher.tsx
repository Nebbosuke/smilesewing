"use client";
import { Button, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link as Scroll } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import img2 from "./img/IMG_4605.jpg";
import koushi from "../../images/koushi.svg";
import CalcWinSize from "../../component/CalcWinSize";
import name_kan from "../../images/name_kan.svg";
import name_en from "../../images/name_en.svg";

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

function Teacher() {
  let today = new Date();
  return (
    <main className="bg-gradient-to-bl">
      <section
        id="intro"
        className="text-gray-700 bg-gradient-to-br from-orange-100 via-white to-orange-100  pt-5 "
      >
        <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-16 ">
          <div className="md:w-1/2 flex flex-col flex-grow items-center text-center md:text-left">
            <div className="flex flex-col w-11/12 items-center border-b-8 border-orange-300 pb-2 mb-6 md:mb-14">
              <img
                src={koushi}
                alt=""
                width={CalcWinSize() === "s" ? 72 : 130}
              ></img>
            </div>
            <h1 className="w-full sm:text-6xl flex md:flex-row flex-col items-center text-3xl font-medium text-gray-900 gap-3">
              <div className="md:w-1/2 flex md:flex-row flex-col pb-4 md:pl-6 justify-center md:justify-start gap-2 md:gap-14">
                <img
                  src={name_kan}
                  alt=""
                  width={CalcWinSize() === "s" ? 150 : 300}
                ></img>
                <div className="flex flex-col justify-end items-center">
                  <img
                    src={name_en}
                    alt=""
                    width={CalcWinSize() === "s" ? 120 : 250}
                  ></img>
                </div>
              </div>
            </h1>
            <div className="flex md:flex-row flex-col items-center mt-3">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center mx-6 mb-6">
                <img src={img2} alt=""></img>
              </div>
              <div>
                <p className="flex flex-col justify-between h-full md:text-xl">
                  <p className="mb-3">
                    {/* <CheckroomIcon fontSize="inherit" color="warning" /> */}
                    洋裁の経験は{today.getFullYear() - 1992}
                    年です。お直しやオーダーを頂いて大好きな洋裁を続けてきましたが、縁があり洋裁教室始めました。
                    スマイルソーイングは今年で{today.getFullYear() - 2011}
                    年目を迎えます。これまでの長年の服作りの経験を、これからも皆様にお伝えすることが出来ましたら幸いです。
                  </p>
                  {/* <p className="mb-3">
                    <CheckroomIcon fontSize="inherit" color="warning" />
                    こちらの教室はゆったりとした広さがあり、お一人で裁断台とミシンを1台ずつご利用いただけます。定員３～4名のきめ細かなレッスンを心がけております。
                  </p>
                  <p className="mb-3">
                    <CheckroomIcon fontSize="inherit" color="warning" />
                    只今教室では生徒の皆様の作品をご覧になることができますので、​ご興味のある方はぜひいらしてください。
                  </p> */}
                </p>
              </div>
            </div>
            <div className="w-full py-3 mx-auto flex items-center md:flex-row flex-col">
              <div className="md:w-1/3">
                <div className="flex flex-row items-center pb-6 pl-6">
                  <div className="mr-5">
                    <Link
                      href="https://www.facebook.com/people/%E6%A3%AE%E5%B7%9D-%E7%B5%B5%E7%BE%8E/pfbid022pxqsfhYGX32d3oLrU7qrkbWX7T9SMijmu9qH6nLH35Txs1YqQTeR8J7dR7nMV6hl/"
                      underline="none"
                    >
                      <FacebookIcon fontSize="medium" />
                    </Link>
                  </div>
                  <div className="mr-5">
                    <Link
                      href="https://www.instagram.com/emimorikawa1997/"
                      underline="none"
                    >
                      <InstagramIcon fontSize="medium" />
                    </Link>
                  </div>
                  <div className="text-xl pt-1 flex items-center">
                    <Link
                      href="https://blog.goo.ne.jp/atorie1997"
                      underline="none"
                    >
                      {/* <OpenInNewIcon fontSize="large" /> */}
                      <div className="">ブログ</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 pb-8 md:flex justify-center">
                <Scroll to="contact" smooth={true}>
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color="ochre">
                      お問い合わせ
                    </Button>
                  </ThemeProvider>
                </Scroll>
              </div>
              <div className="md:w-1/3 text-lg md:flex pb-6 justify-end">
                {/* <Jump id={"intro"} value="ちょっと上へ" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Teacher;
