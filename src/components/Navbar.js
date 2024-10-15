import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { WorkContext } from "..";
import WorksNavbar from "./WorksNavbar";

const Navbar = () => {
  const location = useLocation();
  const [navStyle, setNavStyle] = useState("translate-y-0");

  const [workItem, setWorkItem] = useContext(WorkContext);

  const handelClick = (item) => {
    setWorkItem(item);
    console.log("workitem set to", item);

    const element = document.getElementById(item);
    if (element !== null) {
      element.scrollIntoView(true, { smooth: true });
    }

    if (item === "music") {
      setNavStyle("translate-y-0");
    } else if (item === "film") {
      setNavStyle("-translate-y-6");
    } else if (item === "other") {
      setNavStyle("-translate-y-12");
    }
  };

  useEffect(() => {
    if (workItem === "music") {
      console.log("set translation");
      setNavStyle("translate-y-0");
    } else if (workItem === "film") {
      setNavStyle("-translate-y-6");
    } else if (workItem === "other") {
      setNavStyle("-translate-y-12");
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
