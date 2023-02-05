import {
  useState,
  createContext,
  useEffect,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [dataList, setDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterBreed, setFilterBreed] = useState("");
  const initialState = {
    datas: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DATAS":
        return { ...state, datas: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getDatas = async () => {
    const { data } = await axios.get("http://localhost:3000/datas");
    setDataList(data);
  };
  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_DATAS", payload: dataList });
    const filterDatas = dataList.filter((data) =>
      data.petName.toLowerCase().includes(search.toLocaleLowerCase())
    );
    dispatch({ type: "GET_DATAS", payload: filterDatas });
  }, [dataList, search]);

  useEffect(() => {
    //status filtering
    const filterStatusData = dataList.filter((data) => {
      if (data.status === "allergy") {
        return data.status.includes(filterStatus);
      } else if (data.status === "pickyeater") {
        return data.status.includes(filterStatus);
      } else if (data.status === "") {
        return { data };
      }
      return data;
    });
    dispatch({ type: "GET_DATAS", payload: filterStatusData });
  }, [dataList, filterStatus]);

  useEffect(() => {
    //breed filtering
    const filterBreedData = dataList.filter((data) => {
      if (data.breed === "beagle") {
        return data.breed.includes(filterBreed);
      } else if (data.breed === "spaniel") {
        return data.breed.includes(filterBreed);
      } else if (data.breed === "goldenretriever") {
        return data.breed.includes(filterBreed);
      } else if (data.status === "") {
        return { data };
      }
      return data;
    });
    dispatch({ type: "GET_DATAS", payload: filterBreedData });
  }, [dataList, filterBreed]);

  const data = {
    state,
    dataList,
    setDataList,
    search,
    setSearch,
    showModal,
    setShowModal,
    filterStatus,
    setFilterStatus,
    filterBreed,
    setFilterBreed,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
