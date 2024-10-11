import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handelClick = (item) => {
    console.log(item);
    const element = document.getElementById(item);
    console.log(item);
    element.scrollIntoView(true);
  };

  return (
    <nav>
      <ul className="flex justify-center lg:text-start lg:block gap-8 text-sm">
        <li className="hover:text-gray-500 pb-1">
          <Link to="/">Home</Link>
        </li>
        <li className=" pb-1 relative">
          <Link className="hover:text-gray-500" to="/works">
            Works
          </Link>
          <span className="absolute top-[10px] bg-red-700 ml-4 w-1/4 h-0.5 rounded-md" />
          <ul className="absolute left-[100px] top-0">
            <li
              onClick={() => handelClick("music")}
              className="pb-1 hover:text-gray-500 cursor-pointer"
            >
              Music
            </li>
            <li
              onClick={() => handelClick("film")}
              className="pb-1 hover:text-gray-500 cursor-pointer"
            >
              Film
            </li>
            <li
              onClick={() => handelClick("other")}
              className="pb-1 hover:text-gray-500 cursor-pointer"
            >
              Other
            </li>
          </ul>
        </li>
        <li className="hover:text-gray-500 pb-1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
