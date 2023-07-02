import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state === "Log In" || state) {
      navigate("/banks");
    }
  };
  return (
    <section className="w-10/12 max-sm:mt-10 md:w-[40vw] mx-auto rounded-md shadow p-5 md:p-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 dark:bg-slate-800 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Outlet />
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-[#6366F1] text-white font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm-text-base"
          >
            {state || "Log In"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
