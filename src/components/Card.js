import React from "react";

const Card = ({ item }) => {
  return (
    <div className="p-0 md:p-12 md:px-24 mb-44 lg:mb-64 flex flex-col gap-2 justify-center snap-start">
      <div className="w-full mx-auto pb-[2.625rem]">
        <img
          className="lg:max-w-[18rem] 2xl:max-w-xs"
          src={item.image}
          alt=""
        />
      </div>
      <div className="text-start w-full">
        <p className="font-medium">{item.title}</p>
        <p className="font-light">{item.text}</p>
        <p className="font-light hover:text-gray-500 italic">
          {item.media === "music" ? (
            <a target="_blank" rel="noreferrer" href={item.link}>
              Listen here
            </a>
          ) : (
            <a target="blank" rel="noreferrer" href={item.link}>
              Watch here
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
