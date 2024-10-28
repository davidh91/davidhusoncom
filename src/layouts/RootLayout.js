import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { WorkContext } from "..";
import { TriggerContext } from "..";
import { debounce } from "../utils/debounce";
import AnimatedOutlet from "./AnimatedOutlet";
import { Link } from "react-router-dom";

const RootLayout = () => {
  const [workItem, setWorkItem] = useState("music");
  const [trigger, setTrigger] = useState(false);

  const handleScroll = debounce(() => {
    setTrigger((prev) => !prev);
  }, 50);

  return (
    <WorkContext.Provider value={[workItem, setWorkItem]}>
      <TriggerContext.Provider value={[trigger, setTrigger]}>
        <div className="container mx-auto px-4 lg:px-16 pt-16 h-full">
          <div className="text-center lg:text-start lg:flex h-full overflow-clip overflow-x-visible lg:overflow-auto">
            <header className="z-10">
              <div className="pb-12">
                <Link to="/">
                  <h1 className="font-medium text-xl mb-[0.3rem]">
                    David Huson
                  </h1>
                  <p className="text-xs"> Guitarist & Producer</p>
                </Link>
              </div>
              <Navbar />
            </header>
            <main
              onScroll={handleScroll}
              className="z-0 h-full w-full lg:w-full lg:fixed lg:left-0 m-auto lg:right-0 overflow-auto lg:mt-4 scroll-smooth hide-scrollbar snap-y snap-always snap-mandatory"
            >
              <AnimatedOutlet />
            </main>
            <div className="text-[0.7rem] absolute bottom-0 right-0 p-4 text-[#c2c2c2b9] hover:text-[#595959]">
              © David Huson 2024
            </div>
          </div>
        </div>
      </TriggerContext.Provider>
    </WorkContext.Provider>
  );
};

export default RootLayout;
