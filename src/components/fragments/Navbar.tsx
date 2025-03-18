import React from "react";
import { Link } from "react-router-dom";

function Navbar({ ...props }) {
  return (
    <>
      <nav
        className={`sticky top-0 z-20 w-full bg-white shadow shadow-gray-300 start-0`}
        {...props}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold text-black whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <div className="flex space-x-3 !text-black md:order-2 md:space-x-0 rtl:space-x-reverse">
            {/* NANTI BUAT KONDISI DISINI */}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* NANTI BUAT KONDISI DISINI */}
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex-col p-4 py-5 mt-4 text-sm font-medium text-red-500 border border-gray-100 rounded-lg flexc md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-sm text-inherit md:bg-transparent md:p-0 md:hover:text-blue-500"
                  aria-current="page"
                >
                  Default
                </Link>
              </li>

              <li>
                <Link
                  to={"/about"}
                  className="block px-3 py-2 text-white border-gray-700 rounded-sm text-inherit hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
