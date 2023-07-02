import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="relative h-screen">
        <header className="bg-blend-screen h-[70px] min-h-[50px] duration-200 ease-linear shadow">
          <div className="flex items-center justify-between h-full w-10/12 mx-auto">
            <div className="logo__container font-semibold text-2xl md:text-4xl tracking-wider text-[#6366F1]">
              <Link to="/">Puzzle</Link>
            </div>
            <nav className="">
              <ul className="flex items-center space-x-4">
                <li className="outline outline-1 p-2 text-[#6366F1] outline-[#6366F1] rounded text-xs sm:text-base">
                  <Link state="Sign Up" to="signup">
                    Sign Up
                  </Link>
                </li>
                <li className="bg-[#6366F1] text-xs sm:text-base text-white p-2 rounded">
                  <Link state="Log In" to={"login" || "/"}>
                    Log In
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <>
          <Outlet />{" "}
        </>
      </div>
    </>
  );
};

export default Layout;
