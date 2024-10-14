import React from "react";
import davidphoto from "../assets/images/david.jpg";

const Home = () => {
  return (
    <img
      className="mt-32 lg:mt-2 md:max-w-[70%] lg:max-w-[35%] 2xl:max-w-[70%] 2xl:mt-8 mx-auto"
      src={davidphoto}
      alt="David Huson"
    />
  );
};

export default Home;
