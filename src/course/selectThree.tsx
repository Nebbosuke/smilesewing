import CalcWinSize from "../component/CalcWinSize";
import TableTwo from "../talbe/TableTwo";
import c3 from "./image/c3.svg";
import sentence from "./image/sentence_c1.svg";
import sentence2 from "./image/sentence_c2.svg";

const SelectThree = () => {
  return (
    <main className="items-center text-center md:text-xl text-gray-700">
      <div className="mb-20">
        <div className="flex justify-center ">
          <img src={c3} alt="" width={CalcWinSize() === "s" ? 300 : 550}></img>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center my-10 sm:my-20">
          こんな人におすすめ！
          <div className="border-4 border-green-500 rounded-2xl flex flex-col items-center justify-center gap-8 py-8 sm:py-12 px-8 sm:px-24">
            <img src={sentence} alt="" width={500}></img>
            <img
              src={sentence2}
              alt=""
              width={CalcWinSize() === "s" ? 175 : 370}
            ></img>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-6">
            入園、入学式の衣装づくり ・レッスンバッグ、上履き入れ等づくり
          </p>
          <p>​パパママの服をかわいい子供服にリメイク</p>
        </div>
      </div>

      <TableTwo title={"子供服レッスンコース料金"} />
    </main>
  );
};

export default SelectThree;
