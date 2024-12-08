"use client";
import { useLayoutEffect, useState } from "react";
import onaoshi from "../images/onaoshi.svg";
import sell from "../images/sell.svg";
import senchaku from "../images/senchaku.svg";
import waribiki from "../images/waribiki.svg";
import fix from "../images/fix_clothes.svg";
import { Link as Scroll } from "react-scroll";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CalcWinSize from "./CalcWinSize";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E9DB5D",
    },
  },
});

const Alterations = () => {
  return (
    <>
      <section
        id="alterations"
        className="text-black bg-gradient-to-br from-orange-100 via-white to-orange-100 py-12 pb-24 flex flex-col"
      >
        <div className="container flex mx-auto flex-col items-center gap-14">
          <div className="flex flex-col w-11/12 items-center border-b-8 border-orange-300 pb-2">
            <img
              src={onaoshi}
              alt=""
              width={CalcWinSize() === "s" ? 250 : 500}
            ></img>
          </div>
          <div className="flex flex-col gap-6 items-center mx-5 text-gray-700">
            <p className="md:text-xl">
              洋裁教室だけではありません！お洋服のお直しも承っております。
            </p>
            <p className="md:text-xl">
              サイズ・デザイン直しは、お客様の体に合うよう、細部にまでこだわって丁寧にお直しいたします。
            </p>
          </div>
          <img src={fix} alt="" width={200}></img>
          <div className="flex flex-col gap-8 md:gap-14 items-center mx-5 p-5 bg-orange-200 rounded-xl">
            <img src={sell} alt="" width={1000}></img>
            <img
              src={senchaku}
              alt=""
              width={CalcWinSize() === "s" ? 300 : 500}
            ></img>
            <img
              src={waribiki}
              alt=""
              width={CalcWinSize() === "s" ? 300 : 500}
            ></img>
            <div>
              <p className="md:text-xl text-gray-700">
                当日に
                <a className="text-red-600 text-xl md:text-2xl text-bold">
                  お直ししたいお洋服
                </a>
                を持込されたお客様には、料金を
                <a className="text-red-600 text-xl md:text-2xl text-bold">
                  20%
                </a>
                割引させていただきます！
              </p>
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
        </div>
      </section>
    </>
  );
};
export default Alterations;
