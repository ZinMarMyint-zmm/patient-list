import React, { createContext, useState } from "react";
import MoreModal from "./MoreModal";
import { useContext } from "react";
import { DataContext } from "../App";
import EditModal from "./EditModal";
export const TableContext = createContext(null);
const Table = () => {
  const [datas, setDatas] = useContext(DataContext);
  const [showEditModal, setShowEditModal] = useState(false);

  const [petName, setPetName] = useState("");
  const [pawRent, setPawrent] = useState("");
  const [phno, setPhno] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("default");
  const [status, setStatus] = useState("default");
  const [breed, setBreed] = useState("default");
  return (
    <div>
      <TableContext.Provider
        value={[
          showEditModal,
          setShowEditModal,
          petName,
          setPetName,
          pawRent,
          setPawrent,
          phno,
          setPhno,
          date,
          setDate,
          address,
          setAddress,
          gender,
          setGender,
          status,
          setStatus,
          breed,
          setBreed,
        ]}
      >
        <table className="table-auto w-full text-sm text-left px-3">
          <thead className="text-sm font-semibold text-topbar">
            <tr className="border-y">
              <th className="px-2 py-3">#</th>
              <th className="px-1 py-3">ID</th>
              <th className="px-1 py-3">Pet Name</th>
              <th className="px-1 py-3">Status</th>
              <th className="px-1 py-3">Pawrent</th>
              <th className="px-1 py-3">Breed</th>
              <th className="px-1 py-3">Gender</th>
              <th className="px-1 py-3">Date of Birth</th>
              <th className="px-1 py-3">Contact Phone No.</th>
              <th className="px-1 py-3">Address</th>
              <th className="px-1 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-sm text-black">
            {datas.map((data) => (
              <tr className="border-b" key={data.id}>
                <td className="px-1 py-3"></td>
                <td className="px-1 py-3">{data.id}</td>
                <td className="px-1 py-3">{data.petName}</td>
                <td className="px-1 py-3">{data.status}</td>
                <td className="px-1 py-3">{data.pawRent}</td>
                <td className="px-1 py-3">{data.breed}</td>
                <td className="px-1 py-3">{data.gender}</td>
                <td className="px-1 py-3">{data.date}</td>
                <td className="px-1 py-3">{data.phNo}</td>
                <td className="px-1 py-3">{data.address}</td>
                <td className="py-3 pr-3">
                  <MoreModal id={data.id} />
                  {showEditModal && <EditModal />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContext.Provider>
    </div>
  );
};

export default Table;
