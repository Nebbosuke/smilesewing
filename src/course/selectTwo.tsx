import CalcWinSize from "../component/CalcWinSize";
import TableTwo from "../talbe/TableTwo";
import c2 from "./image/c2.svg";

const SelectTwo = () => {
  return (
    <main className="items-center text-center md:text-xl text-gray-700">
      <div className="mb-20">
        <div className="flex justify-center ">
          <img src={c2} alt="" width={CalcWinSize() === "s" ? 275 : 500}></img>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center my-20">
          <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-purple-300 ">
            デザインレッスン
          </p>
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
