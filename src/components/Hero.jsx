import "../index.css";
import Heading from "./Heading";
import Table from "./Table";

const Hero = ({ datas }) => {
  return (
    <div className="bg-orange-100 p-4">
      <div className="bg-white py-5">
        <Heading datas={datas} />
        <Table datas={datas} />
      </div>
    </div>
  );
};

export default Hero;
