/* eslint-disable react/prop-types */
import { useState } from "react";
// import data from "../../utils/data/banks.json";
import "./banks.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/Inputs";

const AllBanks = () => {
  const navigate = useNavigate();
  const [bankData, setBankData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isModalClicked, setIsModalClicked] = useState({
    state: false,
    name: "",
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setIsModalClicked({ state: false, name: "" });
    }
  });

  const url = "https://nigerianbanks.xyz/";

  const fetchBanks = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSuccess("Banks Retrieved Successfully");
        setBankData(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError("Operation Failed. Try again!");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  useEffect(() => {
    fetchBanks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankData.length]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-10/12 sm:w-[80vw] mx-auto py-8">
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
        bankData.map((bank) => {
          let { slug, name, logo } = bank;
          // idx = slug;
          return (
            <div key={slug} className="">
              <div
                className="cursor-pointer relative single_bank bg-white dark:bg-slate-800 p-8 flex flex-col items-center justify-center after:ease-linear after:duration-300"
                onClick={() => setIsModalClicked({ state: true, name })}
              >
                <img src={logo} alt={name} className="" />
              </div>
              <span className="p-1 block bg-white text-center leading-loose font-medium sm:font-semibold">
                {bank.name}
              </span>
            </div>
          );
        })
      ) : (
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-lg">
          Loading...
        </div>
      )}
      <Modal showModal={isModalClicked} setShowModal={setIsModalClicked} />
    </div>
  );
};

export default AllBanks;

const Modal = ({ showModal, setShowModal }) => {
  const [step1, setStep1] = useState(false);

  return (
    <div
      className={`fixed h-screen w-screen bg-black/40 overflow-hidden top-0 bottom-0 z-50 left-0 right-0 flex items-center justify-center modal dark:bg-grey/70 ${
        !showModal.state && "hidden"
      }`}
    >
      <form
        className="bg-white dark:bg-grey p-8 rounded w-8/12 md:w-5/12 xl:w-3/12space-y-3  relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <span
          className="absolute top-0 right-0 duration-200 ease-in rounded-se cursor-pointer hover:bg-red-700 px-2 py-1 hover:text-white "
          onClick={() => {setShowModal({ state: false, name: "" }), setStep1(false)}}
        >
          &#128473;
        </span>

        {/* step 1 form */}
        <div className={`space-y-3 ${step1 && "hidden"}`}>
          <div className="text-center font-semibold pb-2 text-lg dark:text-white">
            Choose Account Type.
          </div>
          <input
            type="radio"
            name="account_type"
            id="type1"
            className="mr-2"
            value="personal"
            required
          />
          <label htmlFor="type1" className="max-sm:text-xs dark:text-white">
            Personal Account
          </label>
          <br />
          <input
            type="radio"
            name="account_type"
            id="type2"
            className="mr-2"
            value="company"
            required
          />
          <label htmlFor="type2" className="max-sm:text-xs dark:text-white">
            Company Account
          </label>
          <br />
          <input type="checkbox" className="mr-2 mt-4" id="add_account" />
          <label
            htmlFor="add_account"
            className="mt-4 font-medium dark:text-white"
          >
            Add {showModal.name ?? "--"}
          </label>
          <div className="flex items-center justify-center gap-3">
            <button
              className="text-[#6366F1] bg-white border border-[#6366F1] font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base mt-4"
              onClick={() => {
                setShowModal({ state: false, name: "" });
                setStep1(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-[#6366F1] text-white border font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base mt-4"
              onClick={() => setStep1(true)}
            >
              Next
            </button>
          </div>
        </div>

        {/* step 2 form */}
        <div className={`space-y-3 ${!step1 && "hidden"}`}>
          <div className="">
            <InputField
              type="email"
              labelName="User ID"
              placeholder="Enter your user id..."
              color="primary"
              htmlFor="user_id"
            />
          </div>
          <div className="">
            <InputField
              type="password"
              placeholder="Enter your password"
              labelName="Password"
              color="primary"
              htmlFor="password"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              className="text-[#6366F1] bg-white border border-[#6366F1] font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base mt-4"
              onClick={() => setStep1(false)}
            >
              Previous
            </button>
            <button className="bg-[#6366F1] text-white border font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base mt-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
