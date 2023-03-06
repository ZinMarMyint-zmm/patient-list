import Swal from "sweetalert2";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";

const Form = ({ onClose }) => {
  const [petName, setPetName] = useState("");
  const [pawRent, setPawrent] = useState("");
  const [phno, setPhno] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("default");
  const [status, setStatus] = useState("default");
  const [breed, setBreed] = useState("default");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    state: { datas },
    setDataList,
  } = useStateContext();

  // let lastItem = datas.length;
  let lastItemId = datas.length - 1;
  let lastItem = datas[lastItemId];
  console.log(lastItem);

  const onSubmit = () => {
    const data = {};
    data.id = lastItem.id + 1;
    data.petName = petName;
    data.pawRent = pawRent;
    data.phno = phno;
    data.date = date;
    data.address = address;
    data.gender = gender;
    data.status = status;
    data.breed = breed;
    setDataList([...datas, data]);
    axios.post("http://localhost:3000/datas", data);
    Swal.fire("Inserted Successfully", onClose());
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="relative p-6 flex-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="text-xs mx-5">
          <div className="columns-2">
            <div className="mb-3">
              <label htmlFor="">Pet Name</label>
              <br />
              <input
                {...register("petName", { required: true })}
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                type="text"
                className="pl-3 border w-[180px] h-6 border-topbar"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Pawrent</label>
              <br />
              <input
                {...register("pawRent", { required: true })}
                value={pawRent}
                onChange={(e) => setPawrent(e.target.value)}
                type="text"
                className="pl-3 border w-[180px] h-6 border-topbar"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Gender</label>
              <br />
              <select
                className="border w-[180px] h-6 border-topbar"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="default"></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="">Contact Phone No.</label>
              <br />
              <input
                {...register("phno", { required: true })}
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                type="text"
                className="pl-3 border w-[180px] h-6 border-topbar"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Status</label>
              <br />
              <select
                className="border w-[180px] h-6 border-topbar"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select choose status</option>
                <option value="allergy">Allergy</option>
                <option value="pickyeater">PickyEater</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="">Breed</label>
              <br />
              <select
                className="border w-[180px] h-6 border-topbar"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option value="">please choose status</option>
                <option value="beagle">Beagle</option>
                <option value="spaniel">Spaniel</option>
                <option value="goldenretriever">Golden Retriever</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="">Date of Birth</label>
              <br />
              <input
                {...register("date", { required: true })}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="pl-3 border w-[180px] h-6 border-topbar"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Address</label>
              <br />
              <input
                {...register("address", { required: true })}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="pl-3 border w-[180px] h-6 border-topbar"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-6 rounded-b">
            <button
              // onClick={handleSave}
              className="bg-topbar text-white text-sm px-5 py-2 mr-3 ease-linear transition-all duration-150"
              type="submit"
            >
              Save
            </button>

            <button
              onClick={handleClose}
              className="text-sm px-5 py-2 rounded border ease-linear transition-all duration-150"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
