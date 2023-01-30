import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);
  const dateTime = new Date().toLocaleTimeString();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/datas");
      setDatas([...data]);
    };
    fetchData();
  }, []);
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
