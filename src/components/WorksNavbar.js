import React from "react";

const WorksNavbar = ({ handelClick, navStyle }) => {
  return (
    <div className="transition-all">
      <span className="absolute left-[47%] lg:left-0 top-[68px] lg:top-[10px] bg-red-700 lg:ml-16 w-[20px] h-0.5 rounded-md " />
      <ul
        className={`${navStyle} flex gap-3 lg:gap-2 sticky mt-5 lg:mt-0 lg:block lg:absolute mb-5 lg:mb-0 lg:ml-3 left-24 top-0 transition duration-300`}
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
  );
};

export default WorksNavbar;
