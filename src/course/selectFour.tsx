import TableThree from "../talbe/TableThree";
import c4 from "./image/c4.svg";

const SelectFour = () => {
  return (
    <main className="items-center text-center md:text-xl text-gray-700">
      <div className="mb-20">
        <div className="flex justify-center ">
          <img src={c4} alt="" width={700}></img>
        </div>
        <div className="flex flex-row md:gap-6 lg:gap-10 gap-1 justify-center items-center my-20">
          <p className="w-40 h-40 flex flex-col justify-center items-center rounded-full border-4 border-red-300">
            <p>着物をリメイク</p>
          </p>
        </div>
        <p className="mb-6">着物をリメイクするレッスン</p>
      </div>

      <TableThree title={"着物リメイクレッスンコース"} />
    </main>
  );
};

export default SelectFour;
