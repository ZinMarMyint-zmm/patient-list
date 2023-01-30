import search from "../assets/search.png";

import greenDown from "../assets/green_down.png";
import "../index.css";
import Modal from "./Modal";

const Heading = ({ datas, data }) => {
  return (
    <div className=" container mx-auto">
      <p className="text-topbar font-semibold">Patient List</p>

      <div className="flex justify-between">
        <div className="">
          <div className="border rounded-full flex items-center justify-between px-4 py-1 mt-5">
            <input
              className="text-sm text-search"
              type="text"
              placeholder="Search table"
            />
            <img src={search} className="w-4 h-4" alt="" />
          </div>
          <div className="my-5">
            <select className="px-2 border rounded-full text-sm">
              <option value="">Status All</option>
              <option value="">Allergy</option>
              <option value="">Picky Eater</option>
            </select>
            <select className="px-2 border rounded-full text-sm">
              <option value="">Breed All</option>
              <option value="">Beagle</option>
              <option value="">Spaniel</option>
              <option value="">Golden Retriever</option>
            </select>
          </div>
        </div>
        <div>
          <Modal datas={datas} />

          <div className="flex items-center mt-5">
            <p className="mr-2 text-sm">Rows per pages:</p>
            <div className="flex items-center px-2 py-1 border rounded-xl">
              <p className="text-topbar mr-1 text-sm">10</p>
              <img src={greenDown} className="w-2 h-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
