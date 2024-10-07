import React from "react";

const Card = ({ item }) => {
  return (
    <div className="p-12 mb-44 lg:mb-64 w-full flex gap-12 justify-between">
      <div className="w-1/2">
        <img className="lg:max-w-xs" src={item.image} alt="" />
      </div>
      <div className="text-start w-1/2">
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
