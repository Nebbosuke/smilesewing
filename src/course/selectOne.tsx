import TableOne from "../talbe/TableOne";

const SelectOne = () => {
  return (
    <main className="items-center">
      <div className="mb-20 text-center">
        <div className="md:w-1/2 md:text-3xl text-xl mx-auto text-center mb-5 px-3 py-3 rounded-full text-white bg-blue-600 ">
          自由レッスンコース
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
      <TableOne />
    </main>
  );
};

export default SelectOne;
