import React from "react";
import videoThumb from "../assets/images/videothumb.jpg";
import AnimatedLayout from "../layouts/AnimatedLayout";
import videoHeader from "../assets/video/videoheader.webm";
import davidphoto from "../assets/images/david.jpg";

const Home = () => {
  return (
    <AnimatedLayout>
      {/* <img
        className="mt-24 lg:mt-4 3xl:mt-3 md:max-w-[70%] lg:max-w-[50%] 3xl:max-w-[70%] mx-auto"
        src={davidphoto}
        alt="David Huson"
      /> */}
      <video
        className="mt-24 lg:mt-32 md:max-w-[70%] lg:max-w-[30%] 3xl:max-w-[20%] mx-auto"
        autoPlay
        loop
        poster={videoThumb}
      >
        <source src={videoHeader} />
      </video>
    </AnimatedLayout>
  );
};

export default Home;
