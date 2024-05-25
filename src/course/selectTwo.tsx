import TableTwo from "../talbe/TableTwo";

const SelectTwo = () => {
  return (
    <main className="items-center text-center">
      <div className="mb-20">
        <div className="md:w-1/2 md:text-3xl text-xl mx-auto text-center mb-5 px-3 py-3 rounded-full text-white bg-purple-600 ">
          基礎レッスンコース
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center my-20">
          {/* <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-purple-300 ">
            デザインレッスン
          </p> */}
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

      <TableTwo title={"デザインレッスンコース料金"} />
    </main>
  );
};

export default SelectTwo;
