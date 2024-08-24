import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { TiShoppingCart } from "react-icons/ti";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";

const TopHeading = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:justify-center bg-[#000000] p-2">
          <Link to={"/"} className="w-full contents">
            <img
              src="/assets/logowhite.png"
              alt="WINGS-Top-Text"
              className="md:hidden w-[8rem] h-[5rem] object-fill"
            />
          </Link>
          <div className="md:hidden flex flex-row justify-center items-center pr-4 space-x-4">
          <Link to={"/hoodies-cart"} >
           <TiShoppingCart className="text-2xl text-white cursor-pointer" />
           </Link>
          <VscThreeBars
              className="text-2xl text-white cursor-pointer"
              onClick={toggleSideNav}
            />
          </div>
        </div>
        <div className="w-full h-2 bg-black"></div>
      </div>
      {isSideNavOpen && <SideNavbar toggleSideNav={toggleSideNav} />}
    </>
  );
};

export default TopHeading;