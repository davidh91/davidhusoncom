import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { WorkContext } from "..";

const Navbar = () => {
  const [selectedWork, setSelectedWork] = useState("");
  const location = useLocation();
  const [navStyle, setNavStyle] = useState("translate-y-0");

  const [workItem, setWorkItem] = useContext(WorkContext);

  const handelClick = (item) => {
    setWorkItem(item);

    const element = document.getElementById(item);
    if (element !== null) {
      element.scrollIntoView(true, { smooth: true });
    }
  };

  useEffect(() => {
    if (workItem === "music") {
      console.log("trans to music");
      setNavStyle("translate-y-0");
    } else if (workItem === "film") {
      setNavStyle("-translate-y-6");
      console.log("trans to film");
    } else if (workItem === "other") {
      setNavStyle("-translate-y-12");
      console.log("trans to other");
    }
  }, [workItem]);

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
                className={`${navStyle} ml-3 absolute left-24 top-0 transition duration-300`}
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
