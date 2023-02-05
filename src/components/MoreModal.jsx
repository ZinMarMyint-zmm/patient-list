import Swal from "sweetalert2";
import React from "react";
import { useState } from "react";
import more from "../assets/more.png";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";
import { useContext } from "react";
import { TableContext } from "../Table/DataTable";
import axios from "axios";
import { useStateContext } from "../context/StateContext";

const MoreModal = ({ id }) => {
  const {
    state: { datas },
    setDataList,
  } = useStateContext();
  const [moreModal, setMoreModal] = useState(false);
  const [
    ,
    setShowEditModal,
    ,
    setPetName,
    ,
    setPawrent,
    ,
    setPhno,
    ,
    setDate,
    ,
    setAddress,
    ,
    setGender,
    ,
    setStatus,
    ,
    setBreed,
    ,
    setEditId,
  ] = useContext(TableContext);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#54BAB9",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setDataList(datas.filter((i) => i.id != id));
        axios.delete(`http://localhost:3000/datas/${id}`);
      }
    });
  };

  const handleEdit = () => {
    const newData = datas.find((p) => p.id === id);
    const newId = newData.id;
    setPetName(newData.petName);
    setPawrent(newData.pawRent);
    setPhno(newData.phno);
    setDate(newData.date);
    setAddress(newData.address);
    setGender(newData.gender);
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
                  {/* popup modal for delete */}
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
