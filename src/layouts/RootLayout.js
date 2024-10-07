import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="container h-screen mx-auto pt-16">
      <div className="text-center lg:text-start lg:flex h-full">
        <header>
          <div class="pb-8">
            <h1 className="font-medium text-2xl">David Huson</h1>
            <p className="text-sm"> Flamenco Guitarist & Producer</p>
          </div>
          <nav>
            <ul className="flex justify-center lg:text-start lg:block gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="mr-auto block width-1/2 lg:w-3/4 lg:flex items-center lg:justify-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
