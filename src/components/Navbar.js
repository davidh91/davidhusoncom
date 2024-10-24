import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { WorkContext } from "..";
import WorksNavbar from "./WorksNavbar";
const Navbar = () => {
  const location = useLocation();
  const [navStyle, setNavStyle] = useState("");

  const [workItem, setWorkItem] = useContext(WorkContext);

  const handelClick = (item) => {
    setWorkItem(item);

    const element = document.getElementById(item);
    if (element !== null) {
      element.scrollIntoView(true, { smooth: true });
    }

    if (item === "music") {
      setNavStyle("translate-y-0 lg:translate-y-0");
    } else if (item === "film") {
      setNavStyle("lg:-translate-y-6");
    } else if (item === "other") {
      setNavStyle("lg:-translate-y-12");
    }
  };

  useEffect(() => {
    if (workItem === "music") {
      setNavStyle("translate-x-[2.9rem] lg:translate-y-0 lg:translate-x-0");
    } else if (workItem === "film") {
      setNavStyle("translate-x-[0.29rem] lg:-translate-y-6 lg:translate-x-0");
    } else if (workItem === "other") {
      setNavStyle("-translate-x-[2.2rem] lg:-translate-y-12 lg:translate-x-0");
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
            <WorksNavbar handelClick={handelClick} navStyle={navStyle} />
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
