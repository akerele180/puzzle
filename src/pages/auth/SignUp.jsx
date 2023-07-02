import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl font-bold pb-3 dark:text-white">SIGN UP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 space-y-3">
        <div className="">
          <label htmlFor="" className="dark:text-white text-sm font-semibold leading-loose mb-1 block">
            First Name
          </label>
          <input
            type="text"
            className="border border-[#969696] px-4 py-2 rounded block w-full focus:border-[#6366F1] placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
            placeholder="Enter First Name"
          />
        </div>
        <div className="">
          <label htmlFor="" className="dark:text-white text-sm font-semibold leading-loose mb-1 block">
            Last Name
          </label>
          <input
            type="text"
            className="border border-[#969696] px-4 py-2 rounded block w-full focus:border-[#6366F1] placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="">
          <label htmlFor="" className="dark:text-white text-sm font-semibold leading-loose mb-1 block">
            Email
          </label>
          <input
            type="text"
            className="border border-[#969696] px-4 py-2 rounded block w-full focus:border-[#6366F1] placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
            placeholder="Enter Email Address..."
          />
        </div>
        <div className="">
          <label htmlFor="" className="dark:text-white text-sm font-semibold leading-loose mb-1 block">
            Phone Number
          </label>
          <input
            type="number"
            className="border border-[#969696] px-4 py-2 rounded block w-full focus:border-[#6366F1] placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
            placeholder="Enter Phone Number"
          />
        </div>
      </div>
      <div className="text-xs sm:text-base">
        <input
          type="checkbox"
          name=""
          id=""
          className="accent-[#6366F1] mr-2"
        />
        <label className=" leading-redark:text-white laxed">
          By Creating an Account, you agree to accept our{" "}
          <Link to="#" className="text-orange-500">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-orange-500">
            Privacy Policy
          </Link>
        </label>
      </div>
      <span className="text-center text-xs sm:text-base block pt-2 leading-loose">
        Already have an account?{" "}
        <Link to="/login" state="Log In" className=" underline text-[#6366F1]">
          Login
        </Link>
      </span>
    </>
  );
};

export default SignUp;
