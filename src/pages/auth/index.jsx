import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SolidButton from "../../components/Button";

const Auth = () => {
  const { state, pathname } = useLocation();
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
          <SolidButton
            type="submit"
            color={"[#6366F1]"}
            buttonName={
              state ?? (pathname.includes("s") ? "Sign Up" : "Log In")
            }
          />
        </div>
      </form>
    </section>
  );
};

export default Auth;
