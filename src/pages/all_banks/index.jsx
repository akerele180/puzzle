import { useState } from "react";
// import data from "../../utils/data/banks.json";
import "./banks.css";
import { useEffect } from "react";

const AllBanks = () => {
  const [bankData, setBankData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const url = "https://nigerianbanks.xyz/";

  const fetchBanks = async () => {
    setLoading(true);
    const res = await fetch(url);
    if (res.ok) {
      console.log("123");
      const data = await res.json();
      setSuccess("Banks Retrieved Successfully");
      setBankData(data);
      setLoading(false);
    } else {
      setLoading(false);
      setError("Operation Failed. Try again!");
    }
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-10/12 sm:w-[80vw] mx-auto py-8">
      {success || error ? (
        <span
          className={`z-50 text-center text-white text-xs sm:text-base px-3 py-1 absolute top-0 left-1/2 -translate-x-1/2 toast ${
            success && "bg-green-500"
          } ${error && "bg-red-500"}`}
        >
          {success || error}
        </span>
      ) : null}

      {!loading ? (
        bankData.map((bank, idx) => (
          <div key={idx}>
            <div className="bg-white dark:bg-slate-800 p-8 flex flex-col items-center justify-center">
              <img src={bank.logo} alt={bank.name} className="" />
            </div>
            <span className="px-1 block bg-white text-center leading-loose font-medium sm:font-semibold">
              {bank.name}
            </span>
          </div>
        ))
      ) : (
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-lg">
          Loading...
        </div>
      )}
    </div>
  );
};

export default AllBanks;
