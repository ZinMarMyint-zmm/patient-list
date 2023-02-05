import React from "react";
import { useStateContext } from "../context/StateContext";

const FilterData = () => {
  const {
    state: { datas },
    dataList,
    setDataList,
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    filterBreed,
    setFilterBreed,
  } = useStateContext();

  return (
    <div className="my-5">
      <select
        className="px-2 border rounded-full text-sm mr-3"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">Status All</option>
        <option value="allergy">Allergy</option>
        <option value="pickyeater">Picky Eater</option>
      </select>
      <select
        className="px-2 border rounded-full text-sm"
        value={filterBreed}
        onChange={(e) => setFilterBreed(e.target.value)}
      >
        <option value="">Breed All</option>
        <option value="beagle">Beagle</option>
        <option value="spaniel">Spaniel</option>
        <option value="goldenretriever">Golden Retriever</option>
      </select>
    </div>
  );
};

export default FilterData;
