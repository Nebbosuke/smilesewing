import img from "./img/ten_fin.png";
import smile_sewing from "./img/smile_sewing.svg";
import mainImg from "./img/mainImg2.png";
import mainImgforMobile from "./img/mainImg3.png";
import useWindowSize from "../../component/useWindowSize";
import koushi from "./img/koushi_s.svg";
import setsubi from "./img/setsubi.svg";
import lesson from "./img/lesson_s.svg";
import onaoshi from "./img/onaoshi_s.svg";
import teacher from "./img/teacher.svg";
import machine from "./img/machine.svg";
import student from "./img/student.svg";
import fix from "./img/fix_clothes.svg";
import sentence from "./img/sentence.svg";
import CalcWinSize from "../../component/CalcWinSize";
import { Link as Scroll } from "react-scroll";

function Header() {
  let today = new Date();
  return (
    <main className="bg-gradient-to-bl">
      <header className="bg-gray-800 drop-shadow-md sm:fixed w-full z-10">
        <div className="h-2 bg-orange-400 w-full"></div>
        {/* md ... md以上の時にcssを適用 */}

        <div className="container mx-auto flex p-5 md:flex-row flex-col md:items-end items-center">
          <div className="md:w-1/3 mb-4 md:mb-0 flex md:items-start">
            <img src={img} alt="" height="70" width="70"></img>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col items-center md:mx-auto ">
              <div className="flex flex-row items-center">
                <div className="h-2/3 mx-3">
                  <img src={smile_sewing} alt="" height="" width="500"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-end pt-3">
            {/* <ButtonGroups /> */}
          </div>
        </div>
      </header>
      <section
        id="top"
        className=" bg-gradient-to-bl from-orange-100 via-white to-orange-100 sm:pt-32"
      >
        {!useWindowSize(640) && <img src={mainImgforMobile} alt=""></img>}
        {useWindowSize(640) && <img src={mainImg} alt=""></img>}
        <div className="container flex mx-auto flex-col items-center px-5 py-10 gap-12 md:text-xl text-gray-700">
          <div className="flex flex-col gap-6 items-center">
            <img src={sentence} alt="" width={500}></img>
            <p>
              当洋裁教室では、幅広いレベルの方々を対象に、楽しく学べるレッスンコースをご用意しております。
            </p>
            <p>
              洋裁のスキルを学べるだけでなく、洋服のお直しサービスも承っております。お気に入りの洋服を長く愛用していただけるよう、丁寧に対応いたします。
            </p>
          </div>
          <div className="flex flex-col w-full gap-5 px-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="sm:w-1/2 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
                <img src={koushi} alt="" width={50}></img>
                <div className="flex flex-col items-center">
                  アトリエ・スマイルソーイングは、今年で
                  {today.getFullYear() - 2011}
                  年目です。講師の洋裁の経験は{today.getFullYear() - 1992}
                  年です。
                </div>
                <img src={teacher} alt="" width={100}></img>
                <Scroll
                  to="teacher"
                  smooth
                  offset={CalcWinSize() === "s" ? 0 : -60}
                >
                  <button className="hover:text-blue-600 text-base">
                    詳しく見る
                  </button>
                </Scroll>
              </div>
              <div className="sm:w-1/2 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
                <img src={setsubi} alt="" width={50}></img>
                <div className="flex flex-col items-center">
                  教室はゆったりとした広さがあり、お一人で裁断台とミシンを1台ずつご利用いただけます。
                </div>
                <img src={machine} alt="" width={100}></img>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="sm:w-1/2 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
                <img src={lesson} alt="" width={95}></img>
                <div className="flex flex-col items-center">
                  定員３～4名のきめ細かなレッスンを心がけております。
                </div>
                <img src={student} alt="" width={100}></img>
                <Scroll
                  to="selection"
                  smooth
                  offset={CalcWinSize() === "s" ? 0 : -60}
                >
                  <button className="hover:text-blue-600 text-base">
                    詳しく見る
                  </button>
                </Scroll>
              </div>
              <div className="sm:w-1/2 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
                <img src={onaoshi} alt="" width={120}></img>
                <div className="flex flex-col items-center">
                  お洋服のお直しも承っております。サイズ・デザイン直しは、お客様の体に合うよう、細部にまでこだわって丁寧にお直しいたします。
                </div>
                <img src={fix} alt="" width={100}></img>
                <Scroll
                  to="alterations"
                  smooth
                  offset={CalcWinSize() === "s" ? 0 : -100}
                >
                  <button className="hover:text-blue-600 text-base">
                    詳しく見る
                  </button>
                </Scroll>
              </div>
            </div>
          </div>
          <div>
            紹介動画：
            {CalcWinSize() === "l" && (
              <div className="border-8 border-orange-500 rounded-xl">
                <iframe
                  width="1024"
                  height="576"
                  src="https://www.youtube.com/embed/2vq7QF62RXo?si=hQeWR4e-mWwK18zG"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {CalcWinSize() === "m" && (
              <div className="border-8 border-orange-500 rounded-xl">
                <iframe
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/2vq7QF62RXo?si=hQeWR4e-mWwK18zG"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {CalcWinSize() === "s" && (
              <div className="border-4 border-orange-500 rounded-md">
                <iframe
                  width="300"
                  height="170"
                  src="https://www.youtube.com/embed/2vq7QF62RXo?si=hQeWR4e-mWwK18zG"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Header;
