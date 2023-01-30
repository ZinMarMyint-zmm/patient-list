import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, createContext } from "react";
export const DataContext = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);
  const dateTime = new Date().toLocaleTimeString();
  const [datas, setDatas] = useState([
    {
      id: 1,
      petName: "Joh",
      status: "allergy",
      pawRent: "Cherry",
      breed: "beagle",
      gender: "male",
      date: dateTime,
      phNo: "09224466887",
      address: "Yangon",
    },
    {
      id: 2,
      petName: "Jaki",
      status: "pickyeater",
      pawRent: "Kabyar",
      breed: "spaniel",
      gender: "male",
      date: dateTime,
      phNo: "09334466887",
      address: "Mandalay",
    },
  ]);
  return (
    <div className="">
      <DataContext.Provider value={[datas, setDatas, showModal, setShowModal]}>
        <Navbar />

        <Hero datas={datas} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
