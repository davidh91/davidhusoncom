import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="container mx-auto px-16 pt-16">
      <div className="text-center lg:text-start lg:flex h-full">
        <header>
          <div className="pb-12">
            <h1 className="font-medium text-xl">David Huson</h1>
            <p className="text-xs"> Flamenco Guitarist & Producer</p>
          </div>
          <Navbar />
        </header>
        <main className="lg:fixed lg:left-0 m-auto lg:right-0 w-fit overflow-auto lg:mt-32 h-screen scroll-smooth hide-scrollbar snap-y snap-always snap-mandatory">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
