import { Link } from "react-router-dom";
import InputField from "../../components/Inputs";

const SignUp = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl font-bold pb-3 dark:text-white">
        SIGN UP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 max-md:space-y-3">
        <div className="">
          <InputField
            color="primary"
            labelName="First Name"
            htmlFor="first_name"
            inputType="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="">
          <InputField
            color="primary"
            labelName="Last Name"
            htmlFor="last_name"
            inputType="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="">
          <InputField
            color="primary"
            labelName="Email"
            htmlFor="email"
            inputType="text"
            placeholder="Enter email address..."
          />
        </div>
        <div className="">
          <InputField
            color="primary"
            labelName="Number"
            htmlFor="phone"
            inputType="number"
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
        <Link to="/login" state="Log In" className="underline text-[#6366F1]">
          Login
        </Link>
      </span>
    </>
  );
};

export default SignUp;
