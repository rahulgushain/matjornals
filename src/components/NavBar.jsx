import { useState } from "react";
import "./NavBar.css";
import logo from "../Photos/mat.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlMenu } from "react-icons/sl";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="flex w-full bg-white fixed justify-between pl-10 items-center p-4 shadow-xl h-[70px] z-[20]">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-15" />
      </div>

      {/* Menu Button (Mobile) */}
      <div className="md:hidden text-blue-500 text-3xl cursor-pointer">
        <SlMenu onClick={() => setOpenMenu(!openMenu)} />
      </div>

      {/* Menu Items */}
      <ul
      
        className={`fixed md:static top-0 right-0 h-full md:text-sm md:gap-3 lg:gap-6 lg:text-xl md:h-auto bg-white shadow-lg md:shadow-none transition-transform duration-300 ease-in-out
        ${openMenu ? "translate-x-0 w-3/4 sm:w-1/2 md:w-auto" : "translate-x-full md:translate-x-0"}
        md:flex  text-blue-600 items-center p-4  md:p-0`}
      >
        <li className="md:hidden text-right p-2">
          <button onClick={() => setOpenMenu(false)} className="text-2xl">✖</button>
        </li>
        <li>Home</li>
        <li
          className={`relative flex items-center cursor-pointer ${openMenu? 'py-0' : 'py-5'}`}
          onMouseEnter={() => handleMouseEnter("journals")}
          onMouseLeave={handleMouseLeave}
        >
          Journals <IoMdArrowDropdown />
          {openDropdown === "journals" && (
            <ul className={`absolute md:left-0 right-0 ${ openMenu ? 'top-0' :'top-[56px]'} mt-2 w-48 bg-white shadow-lg border rounded`}>
              <li className="p-2 hover:bg-gray-100 hover:px-4">Engineering</li>
              <li className="p-2 hover:bg-gray-100 hover:px-4">Nursing</li>
              <li className="p-2 hover:bg-gray-100 hover:px-4">Pharmacy</li>
              <li className="p-2 hover:bg-gray-100 hover:px-4">Management</li>
            </ul>
          )}
        </li>
        <li
          className={`relative flex items-center cursor-pointer ${openMenu? 'py-0' : 'py-5'}`}
          onMouseEnter={() => handleMouseEnter("subscribers")}
          onMouseLeave={handleMouseLeave}
        >
          Subscribers <IoMdArrowDropdown />
          {openDropdown === "subscribers" && (
            <ul className={`absolute md:left-0 right-0 ${ openMenu ? 'top-0' :'top-[56px]'} mt-2 w-48 bg-white shadow-lg border rounded`}>
          
              <li className="p-2 hover:bg-gray-100 hover:px-4">Payment</li>
              <li className="p-2 hover:bg-gray-100 hover:px-4">MAT Journals Catalogue/Price List</li>
            </ul>
          )}
        </li>
        <li>Indexing</li>
        <li>DOI</li>
        <li className="line-clamp-1">Publication Ethics</li>
        <li>Career</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
