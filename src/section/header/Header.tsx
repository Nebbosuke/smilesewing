import img from "./img/ten_fin.png";
import ButtonGroups from "../../component/ButtonGroups";
import ball from "./img/main3.png";
import mainImg from "./img/mainImg2.png";
import mainImgforMobile from "./img/mainImg3.png";
import des from "./img/des.png";
import des1 from "./img/des1.png";
import useWindowSize from "../../component/useWindowSize";

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
                  <img src={ball} alt="" height="" width="500"></img>
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
        <div className="container flex mx-auto flex-col items-center px-5 py-10 gap-12">
          {!useWindowSize(640) && <img src={mainImgforMobile} alt=""></img>}
          {useWindowSize(640) && <img src={mainImg} alt=""></img>}
          {/* <div>教室について</div> */}
          <div className="flex flex-col sm:flex-row w-full gap-12 px-5">
            <div className="sm:w-1/3 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
              <div className="flex flex-col items-center justify-center w-max text-orange-400 text-lg sm:text-2xl">
                講師
              </div>
              <div className="flex flex-col items-center">
                アトリエ・スマイルソーイングは、今年で
                {today.getFullYear() - 2011}
                年目です。講師の洋裁の経験は{today.getFullYear() - 1992}年です。
              </div>
            </div>
            <div className="sm:w-1/3 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
              <div className="flex flex-col items-center justify-center w-max text-orange-400 text-lg sm:text-2xl">
                設備
              </div>
              <div className="flex flex-col items-center">
                教室はゆったりとした広さがあり、お一人で裁断台とミシンを1台ずつご利用いただけます。
              </div>
            </div>
            <div className="sm:w-1/3 flex flex-col items-center justify-center gap-3 rounded-3xl  py-5 px-2 border-2 border-orange-400 shadow-xl">
              <div className="flex flex-col items-center justify-center w-max text-orange-400 text-lg sm:text-2xl">
                レッスン
              </div>
              <div className="flex flex-col items-center">
                定員３～4名のきめ細かなレッスンを心がけております。
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Header;
