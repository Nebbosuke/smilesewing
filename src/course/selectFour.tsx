import TableThree from "../talbe/TableThree";
import c4 from "./image/c4.svg";
import sentence from "./image/sentence_d1.svg";

const SelectFour = () => {
  return (
    <main className="items-center text-center md:text-xl text-gray-700">
      <div className="mb-20">
        <div className="flex justify-center ">
          <img src={c4} alt="" width={700}></img>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center my-10 sm:my-20">
          こんな人におすすめ！
          <div className="border-4 border-red-500 rounded-2xl flex flex-col items-center justify-center gap-8 py-8 sm:py-12 px-12 sm:px-24">
            <img src={sentence} alt="" width={500}></img>
          </div>
        </div>
        <p className="mb-6">着物をリメイクするレッスン</p>
      </div>

      <TableThree title={"着物リメイクレッスンコース"} />
    </main>
  );
};

export default SelectFour;
