import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 duration-300 ease-linear flex justify-center flex-col items-center">
      <h2 className="uppercase mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7 xl:text-8xl dark:text-indigo-100 text-center font-extrabold p-2 ">
        Manage all your bank accounts in one place
      </h2>

      <Link
        to="/login"
        state='Log In'
        className="text-center bg-primary rounded-md text-white px-8 py-4 text-lg font-semibold"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
