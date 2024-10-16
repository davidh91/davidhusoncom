import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { WorkContext } from "..";
import { TriggerContext } from "..";
import { debounce } from "../utils/debounce";
import AnimatedOutlet from "./AnimatedOutlet";

const RootLayout = () => {
  const [workItem, setWorkItem] = useState("music");
  const [trigger, setTrigger] = useState(false);

  const handleScroll = debounce(() => {
    setTrigger((prev) => !prev);
  }, 50);

  return (
    <WorkContext.Provider value={[workItem, setWorkItem]}>
      <TriggerContext.Provider value={[trigger, setTrigger]}>
        <div className="container mx-auto px-16 pt-16 h-full">
          <div className="text-center lg:text-start lg:flex h-full overflow-clip lg:overflow-auto">
            <header>
              <div className="pb-12">
                <h1 className="font-medium text-xl">David Huson</h1>
                <p className="text-xs"> Flamenco Guitarist & Producer</p>
              </div>
              <Navbar />
            </header>
            <main
              onScroll={handleScroll}
              className="h-full lg:fixed lg:left-0 m-auto lg:right-0 w-fit overflow-auto 2xl:mt-32 scroll-smooth hide-scrollbar snap-y snap-always snap-mandatory"
            >
              <AnimatedOutlet />
            </main>
          </div>
        </div>
      </TriggerContext.Provider>
    </WorkContext.Provider>
  );
};

export default RootLayout;
