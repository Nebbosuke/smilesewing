import CalcWinSize from "../component/CalcWinSize";
import TableTwo from "../talbe/TableTwo";
import c2 from "./image/c2.svg";
import sentence from "./image/sentence_b1.svg";

const SelectTwo = () => {
  return (
    <main className="items-center text-center md:text-xl text-gray-700">
      <div className="mb-20">
        <div className="flex justify-center ">
          <img src={c2} alt="" width={CalcWinSize() === "s" ? 275 : 500}></img>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center my-10 sm:my-20">
          こんな人におすすめ！
          <div className="border-4 border-purple-500 rounded-2xl flex flex-col items-center justify-center gap-8 py-8 sm:py-12 px-3 sm:px-24">
            <img
              src={sentence}
              alt=""
              width={CalcWinSize() === "s" ? 500 : 600}
            ></img>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-6">
            自然素材のリネンとコットンの生地を使う、シンプルなデザインの服・小物作り
          </p>
          {/* <p className="mb-6">
            第1回は、さっと羽織れるジャケットを作ります
            （他にはAラインチュニック、ウエストゴムのパンツ・スカートなど）
          </p> */}
        </div>
      </div>

      <TableTwo title={"基礎レッスンコース料金"} />
    </main>
  );
};

export default SelectTwo;
