import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [selectedWork, setSelectedWork] = useState("");
  const location = useLocation();
  const navStyle = useRef();
  console.log("sdsd", location.pathname);

  const handelClick = (item) => {
    if (item === "music") {
      navStyle.current = "translate-y-0";
    } else if (item === "film") {
      navStyle.current = "-translate-y-6";
    } else if (item === "other") {
      navStyle.current = "-translate-y-12";
    }

    setSelectedWork(item);
    console.log(selectedWork);
    const element = document.getElementById(item);
    if (element !== null) {
      element.scrollIntoView(true, { smooth: true });
    }
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
          {location.pathname === "/works" ? (
            <div className="transition-all">
              <span className="absolute top-[10px] bg-red-700 ml-20 w-[20px] h-0.5 rounded-md tra" />
              <ul
                className={`${navStyle.current} ml-3 absolute left-24 top-0 transition duration-300`}
              >
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
            </div>
          ) : (
            ""
          )}
        </li>
        <li className="hover:text-gray-500 pb-1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
