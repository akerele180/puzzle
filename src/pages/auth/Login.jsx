import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl font-bold pb-3 dark:text-white">
        LOGIN
      </h2>
      <div className="">
        <label
          htmlFor=""
          className="dark:text-white text-sm font-semibold leading-loose mb-1 block"
        >
          Email
        </label>
        <input
          type="text"
          className="border border-[#969696] px-4 py-2 rounded block w-full focus:border-[#6366F1] placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base"
          placeholder="Enter Email Address..."
        />
      </div>

      <span className="text-center text-xs sm:text-base block pt-2 leading-loose">
        Don't have an account?{" "}
        <Link
          to="/signup"
          state="Sign Up"
          className=" underline text-[#6366F1]"
        >
          Sign Up
        </Link>
      </span>
    </>
  );
};

export default Login;
