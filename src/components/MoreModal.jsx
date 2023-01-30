import React, { createContext } from "react";
import { useState } from "react";
import more from "../assets/more.png";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";
import { useContext } from "react";
import { DataContext } from "../App";
import { TableContext } from "./Table";

const MoreModal = ({ id }) => {
  const [datas, setDatas, showModal, setShowModal] = useContext(DataContext);
  const [moreModal, setMoreModal] = useState(false);
  const [
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
    editId,
    setEditId,
  ] = useContext(TableContext);

  const handleDelete = () => {
    setDatas(datas.filter((i) => i.id != id));
  };

  const handleEdit = () => {
    const newData = datas.find((p) => p.id === id);
    const newId = newData.id;
    setPetName(newData.petName);
    setPawrent(newData.pawRent);
    setPhno(newData.phno);
    setDate(newData.date);
    setAddress(newData.address);
    setGender(newData.address);
    setStatus(newData.status);
    setBreed(newData.breed);
    setEditId(id);
    setShowEditModal(true);
    return newData;
  };

  return (
    <div>
      <div type="button" onClick={() => setMoreModal(!moreModal)}>
        <img src={more} className="w-5 h-5" alt="" />

        {moreModal && (
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative ml-auto my-auto">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="">
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="flex justify-evenly w-[80px] border py-1 px-1"
                  >
                    <img src={edit} alt="" />
                    Edit
                  </button>

                  <button
                    onClick={handleDelete}
                    className="flex justify-evenly w-[80px] border py-1 px-1"
                  >
                    <img src={del} alt="" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MoreModal;
