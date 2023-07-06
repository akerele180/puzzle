import { Link } from "react-router-dom";
import InputField from "../../components/Inputs";

const Login = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl font-bold pb-3 dark:text-white">
        LOGIN
      </h2>

      <div className="">
        <InputField
          color="primary"
          labelName="Email"
          htmlFor="email"
          inputType="text"
          placeholder="Enter email address..."
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
