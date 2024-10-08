import React from "react";
import davidphoto from "../assets/images/david.jpg";

const Home = () => {
  return (
    <img
      className="mt-32 lg:mt-[15vh] md:max-w-[70%] lg:max-w-[50%] mx-auto"
      src={davidphoto}
      alt="David Huson"
    />
  );
};

export default Home;
