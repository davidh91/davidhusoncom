import React from "react";
import davidphoto from "../assets/images/david.jpg";

const Home = () => {
  return (
    <div className="mt-8 lg:mt-0 lg:max-w-sm lg:mb-32 ">
      <img className="mx-auto lg:m-0" src={davidphoto} alt="David Huson" />
    </div>
  );
};

export default Home;
