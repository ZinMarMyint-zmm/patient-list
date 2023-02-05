import searchImg from "../assets/search.png";
import greenDown from "../assets/green_down.png";
import "../index.css";
import Modal from "./Modal";
import { useStateContext } from "../context/StateContext";
import FilterData from "./FilterData";

const Heading = () => {
  const {
    state: { datas },
    dataList,
    setDataList,
    search,
    setSearch,
  } = useStateContext();

  return (
    <div className=" container mx-auto">
      <p className="text-topbar font-semibold">Patient List</p>

      <div className="flex justify-between">
        <div className="">
          <div className="border rounded-full flex items-center justify-between px-4 py-1 mt-5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm text-search outline-none"
              type="text"
              placeholder="Search table"
            />
            <img src={searchImg} className="w-4 h-4" alt="" />
          </div>
          <FilterData />
        </div>
        <div>
          <Modal datas={datas} />

          <div className="flex items-center mt-5">
            <p className="mr-2 text-sm">Rows per pages:</p>
            <div className="flex items-center px-2 py-1 border rounded-xl">
              <p className="text-topbar mr-1 text-sm">{datas.length}</p>
              <img src={greenDown} className="w-2 h-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
