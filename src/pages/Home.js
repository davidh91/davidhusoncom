import React from "react";
import davidphoto from "../assets/images/david.jpg";
import AnimatedLayout from "../layouts/AnimatedLayout";

const Home = () => {
  return (
    <AnimatedLayout>
      <img
        className="mt-24 lg:mt-4  3xl:mt-3 md:max-w-[70%] lg:max-w-[50%] 3xl:max-w-[70%] mx-auto"
        src={davidphoto}
        alt="David Huson"
      />
    </AnimatedLayout>
  );
};

export default Home;
