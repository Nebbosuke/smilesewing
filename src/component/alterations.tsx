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
import PriceTable from "./PriceTable";
import price from "../images/price_table.svg";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E9DB5D",
    },
  },
});

type PriceTable = { title: string; data: { [K: string]: string } }[];

const priceData: PriceTable = [
  {
    title: "紳士スラックス",
    data: { 丈詰め: "1,980", ウエスト詰め: "3,960", ファスナー取替: "4,400" },
  },
  {
    title: "婦人スラックス",
    data: { 丈詰め: "1,980", ウエスト詰め: "4,730", ファスナー取替: "4,070" },
  },
  {
    title: "スカート",
    data: { 丈詰め: "3,300", ウエスト詰め: "4,730", ファスナー取替: "4,070" },
  },
  {
    title: "シャツ・ブラウス",
    data: { 着丈詰め: "2,750", 袖丈つめ: "3,960", 肩巾つめ: "4,070" },
  },
  {
    title: "紳士ジャケット",
    data: { 着丈詰め: "8,140", 袖丈つめ: "5,060", 肩巾つめ: "11,110" },
  },
  {
    title: "婦人ジャケット",
    data: { 着丈詰め: "5,280", 袖丈つめ: "3,850", 肩巾つめ: "6,050" },
  },
  {
    title: "紳士コート",
    data: { 着丈詰め: "7,810", 袖丈つめ: "5,650", 肩巾つめ: "12,870" },
  },
  {
    title: "婦人コート",
    data: { 着丈詰め: "6,600", 袖丈つめ: "4,730", 肩巾つめ: "8,580" },
  },
  {
    title: "デニム",
    data: { 丈詰め: "1,540", ウエスト詰め: "4,730", ファスナー取替: "4,070" },
  },
  {
    title: "Tシャツ",
    data: { 着丈詰め: "3,190", 袖丈つめ: "2,970", 肩巾つめ: "3,960" },
  },
  {
    title: "学生服",
    data: {
      学生スカート丈つめ: "4,510",
      学生スカートウエスト: "6,490",
      着丈詰め: "6,050",
      袖丈つめ: "4,290",
      肩巾つめ: "7,150",
    },
  },
  {
    title: "入園入学グッズ",
    data: { 巾着袋: "2,970", 上履き入れ: "3,410" },
  },
  {
    title: "和服直し",
    data: {
      袖丈: "13,750",
      裄丈: "20,350",
      身丈詰め: "28,600",
      半衿つけ: "6,600",
    },
  },
];

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
          {/* <div className="flex flex-col gap-8 md:gap-14 items-center mx-5 p-5 bg-orange-200 rounded-xl">
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
          </div> */}
          <div className="w-full flex flex-col items-center justify-center mt-5">
            <img
              src={price}
              alt=""
              width={CalcWinSize() === "s" ? 175 : 250}
            ></img>
            <PriceTable rows={priceData} />
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
