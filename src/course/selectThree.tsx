import TableTwo from "../talbe/TableTwo";

const SelectThree = () => {
  return (
    <main className="items-center text-center">
      <div className="mb-20">
        <div className="md:w-1/2 md:text-3xl text-xl mx-auto text-center mb-5 px-3 py-3 rounded-full text-white bg-green-600 ">
          子供服レッスンコース
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center items-center my-20">
          <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-green-300 ">
            子供の服をつくる
          </p>
          <p className="w-40 h-40 flex justify-center items-center rounded-full border-4 border-green-300 ">
            小物をつくる
          </p>
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
