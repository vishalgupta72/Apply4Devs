import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="shadow bg-white text-white p-3">
      <div className="lg:px-5 mx-auto flex items-center justify-between">

        {/* Left Section - Name with Icon */}
        <div className="flex items-center ">
          <span className="max-[431px]:hidden sm:text-2xl font-semibold text-neutral-700 select-none">Apply4Devs</span>
        </div>

        {/* Center Section - Search Box */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white border border-gray-700 text-neutral-700 focus:outline-none"
              onChange={(e)=>props.setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Right Section - Name */}
        <div className="flex items-center">
          <span className="max-[431px]:hidden sm:text-2xl font-semibold text-neutral-700">1000 companies</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;