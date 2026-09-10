import Logo from "../../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="nav-bar bg-base-100 shadow-sm relative">
      <div className="navbar p-0  max-w-7xl mx-auto">
        {/* navbar-start: hamburger + desktop logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul 
            tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>

          {/* Desktop logo: only visible at lg+, sits at the start (left) */}
          <a href="#!" className=" text-xl hidden lg:flex max-w-37"
          >
            <img src={Logo} alt="logo" />
          </a>
        </div>

        {/* Mobile logo: absolutely centered, only visible below lg */}
        {/* <a className="btn btn-ghost text-xl lg:hidden absolute left-1/2 -translate-x-1/2">
          <img src={Logo} alt="logo" />
        </a> */}
        <a href="#!" className=" text-xl lg:hidden absolute left-1/2 -translate-x-1/2"
          >
            <img src={Logo} alt="logo" />
          </a>

        {/* navbar-center: menu only, unchanged desktop behavior */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7">
            <li>
              <a href="#!" className="cursor-pointer text-[#475569] hover:text-[#db2777] transition-colors duration-300 ease-in-out">Home</a>
            </li>
            <li>
              <a href="#!" className="cursor-pointer text-[#475569] hover:text-[#db2777] transition-colors duration-300 ease-in-out">Technologies</a>
            </li>
            <li>
              <a href="#!" className="cursor-pointer text-[#475569] hover:text-[#db2777] transition-colors duration-300 ease-in-out">Projects</a>
            </li>
            <li>
              <a href="#!" className="cursor-pointer text-[#475569] hover:text-[#db2777] transition-colors duration-300 ease-in-out">About</a>
            </li>
            <li>
              <a href="#!" className="cursor-pointer text-[#475569] hover:text-[#db2777] transition-colors duration-300 ease-in-out">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex">
          <button className="cursor-pointer text-[#475569] rounded-4xl hover:text-white hover:bg-[#D91B7E] py-1 px-2 lg:py-2.5 lg:px-5  transition-colors duration-300 ease-in-out">Sign In</button>
          <button className="cursor-pointer text-[#475569] rounded-4xl hover:text-white hover:bg-[#D91B7E] py-1 px-2 lg:py-2.5 lg:px-5  transition-colors duration-300 ease-in-out">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
