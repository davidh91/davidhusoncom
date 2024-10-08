import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="container mx-auto px-16 pt-16">
      <div className="text-center lg:text-start lg:flex h-full">
        <header>
          <div class="pb-12">
            <h1 className="font-medium text-xl">David Huson</h1>
            <p className="text-xs"> Flamenco Guitarist & Producer</p>
          </div>
          <nav>
            <ul className="flex justify-center lg:text-start lg:block gap-8 text-sm">
              <li className="hover:text-gray-500 pb-1">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-500 pb-1">
                <Link to="/works">Works</Link>
              </li>
              <li className="hover:text-gray-500 pb-1">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="lg:fixed lg:left-0 m-auto lg:right-0 w-fit overflow-auto lg:mt-32 h-screen scroll-smooth hide-scrollbar snap-y snap-always snap-mandatory">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
