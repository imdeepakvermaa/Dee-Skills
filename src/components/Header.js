import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import logo from "../Assets/White_Logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { id: 1, link: "Courses" },
    { id: 2, link: "Notes" },
    { id: 3, link: "Practice" },
    { id: 4, link: "About" },
    { id: 5, link: "Contact" },
  ];

  const btns = [
    { btn: 1, btnname: "SignIn" },
    { btn: 2, btnname: "SignUp" },
  ];

  return (
    <div className="flex justify-center items-center gap-32 w-full px-4 h-20 text-white bg-gradient-to-b from-black to-indigo-950 fixed">
      <div className="mt-2">
        <img className="w-32" src={logo} alt="logo" />
      </div>

      <ul className="hidden gap-12 md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`flex items-center px-4 cursor-pointer capitalize text-lg font-medium ${
              activeLink === id ? "text-gray-500" : "text-gray-300"
            } hover:scale-105 duration-200`}
            onClick={() => setActiveLink(id)}
          >
            {activeLink === id && <FaChevronRight className="mr-2" />}
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 font-bold">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`flex items-center cursor-pointer capitalize py-6 text-4xl ${
                activeLink === id ? "text-gray-500" : "text-gray-400"
              }`}
              onClick={() => {
                setActiveLink(id);
                setNav(false);
              }}
            >
              {id === 1 && <FaChevronRight className="mr-2" />}
              {link}
            </li>
          ))}
        </ul>
      )}

      <div className="hidden gap-10 md:flex">
        {btns.map(({ btn, btnname }) => (
          <button
            key={btn}
            className="px-4 cursor-pointer border-solid border-2 border-indigo-500 bg-indigo-500  text-lg font-bold text-gray-300 hover:scale-105 duration-200"
          >
            {btnname}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
