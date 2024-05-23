import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

interface Props {
  pages: NavItem[];
}

const Header = ({ pages }: Props) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`top-0 left-0 w-full z-50 bg-base-100 mb-8 rounded-sm `}>
      <div className="w-full flex justify-between items-center p-4 max-md:p-4 max-md:flex-col gap-6">
        <div className="flex justify-between w-full items-center">
          <a href="/" className="btn btn-ghost p-4 h-fit">
            <img
              src={logo.src}
              alt="Logo of NZ Ethnic Women's Trust"
              width={350}
              className="max-md:w-60"
            />
          </a>

          {!showNav ? (
            <AiOutlineMenu
              className="max-md:block hidden text-5xl cursor-pointer"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineClose
              className="max-md:block hidden text-5xl cursor-pointer"
              onClick={toggleNav}
            />
          )}
        </div>

        <a
          href="/donate"
          className="btn btn-primary hidden md:flex rounded-none text-2xl w-fit"
        >
          Donate Today
        </a>
      </div>
      <div
        className={`navbar bg-base-100 justify-center ${
          showNav ? "max-md:block" : "max-md:hidden"
        }`}
      >
        <ul
          className={`menu menu-horizontal px-1 justify-evenly w-2/3 text-xl max-lg:w-full max-md:flex-col`}
        >
          {pages.map((page, index) => (
            <li key={index}>
              {page.name !== "Donate" && ( // Hide "donate" link by default
                <a href={page.url}>{page.name}</a>
              )}
              {page.name === "Donate" && ( // Show "donate" link only on larger screens
                <a href={page.url} className="block md:hidden">
                  {page.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className=" opacity-20 rounded-md h-1 shadow-xl bg-gray-300 "></div> */}
    </div>
  );
};

export default Header;
