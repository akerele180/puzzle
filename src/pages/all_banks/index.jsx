import { useState } from "react";
import data from "../../utils/data/banks.json";
import { useEffect } from "react";

const AllBanks = () => {
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    setBankData(data.data);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-10/12 sm:w-[80vw] mx-auto">
      {bankData.map((bank, idx) => (
        <div className="bg-white p-8 flex items-center justify-center" key={idx}>
          <img src={bank.logo} alt={bank.name} className="" />
        </div>
      ))}
    </div>
  );
};

export default AllBanks;
