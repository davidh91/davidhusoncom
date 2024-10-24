import React from "react";
import davidphoto from "../assets/images/david.jpg";
import videoThumb from "../assets/images/videothumb.jpg";
import AnimatedLayout from "../layouts/AnimatedLayout";
import videoHeader from "../assets/video/videoheader.webm";

const Home = () => {
  return (
    <AnimatedLayout>
      {/* <img
        className="mt-24 lg:mt-4  3xl:mt-3 md:max-w-[70%] lg:max-w-[50%] 3xl:max-w-[70%] mx-auto"
        src={davidphoto}
        alt="David Huson"
      /> */}

      <div className="mt-8 lg:mt-4  3xl:mt-3 md:max-w-[70%] lg:max-w-[30%] 3xl:max-w-[50%] mx-auto">
        <video autoPlay loop poster={videoThumb}>
          <source src={videoHeader} />
        </video>
      </div>
    </AnimatedLayout>
  );
};

export default Home;
