import CalcWinSize from "../component/CalcWinSize";
import TableOne from "../talbe/TableOne";
import c1 from "./image/c1.svg";
import a1 from "../photo/jiyuu/a1.png";
import a2 from "../photo/jiyuu/a2.png";
import a3 from "../photo/jiyuu/a3.png";
import a4 from "../photo/jiyuu/a4.png";
import a5 from "../photo/jiyuu/a5.png";

const SelectOne = () => {
  return (
    <main className="items-center md:text-xl text-gray-700">
      <div className="mb-20 text-center">
        <div className="flex justify-center ">
          <img src={c1} alt="" width={CalcWinSize() === "s" ? 275 : 500}></img>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center my-20">
          <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-blue-300 ">
            好きな服をつくる
          </p>
          <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-blue-300 ">
            洋服のお直し
          </p>
        </div>
        <div className="mb-3">
          <p className="mb-6">ご自分のお好きな服を体形に合わせて作るレッスン</p>
          <p>
            洋服お直しレッスン（ズボンの裾上げ、スカート・パンツ丈詰め、Yシャツ・ブラウスの袖丈詰めなど）
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col sm:flex-row mb-14 items-center gap-5">
        <img src={a1} alt="" width={300}></img>
        <img src={a2} alt="" width={300}></img>
        <img src={a3} alt="" width={300}></img>
        <img src={a4} alt="" width={300}></img>
        <img src={a5} alt="" width={300}></img>
      </div> */}
      <TableOne />
    </main>
  );
};

export default SelectOne;
