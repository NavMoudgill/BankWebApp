import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { LazyLoadImage } from "react-lazy-load-image-component";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between py-6 navbar text-white">
      <LazyLoadImage src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks?.map((item, index) => {
          const naving = "#" + item.id;
          console.log(naving);
          return (
            <li
              key={item.id}
              className={` font-poppins font-normal text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              <a href={naving} className="">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <LazyLoadImage
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-3 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-start">
            {navLinks?.map((item, index) => {
              const naving = "#" + item.id;
              console.log(naving);
              return (
                <li
                  key={item.id}
                  className={` font-poppins font-normal text-[16px] px-6 ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } `}
                >
                  <a href={naving} onClick={() => setToggle((prev) => !prev)}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
