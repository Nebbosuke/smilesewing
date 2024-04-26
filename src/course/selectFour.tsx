import TableThree from "../talbe/TableThree";

const SelectFour = () => {
  return (
    <main className="items-center text-center">
      <div className="mb-20">
        <div className="md:w-1/2 md:text-3xl text-xl mx-auto text-center mb-5 px-3 py-3 rounded-full text-white bg-red-600 ">
          着物リメイクレッスンコース
        </div>
        <div className="flex flex-row md:gap-6 lg:gap-10 gap-1 justify-center items-center my-20">
          <p className="w-40 h-40 flex flex-col justify-center items-center rounded-full border-4 border-red-300">
            <p>手縫いで</p>
            <p>着物をリメイク</p>
          </p>
        </div>
        <p className="mb-6">手縫いで着物をリメイクするレッスン</p>
        <p className="mb-6">８人グループ制</p>
        <p className="mb-6">出張あり</p>
      </div>

      <TableThree title={"着物リメイクレッスンコース"} />
    </main>
  );
};

export default SelectFour;
