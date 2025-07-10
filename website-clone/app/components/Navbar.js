import React from 'react';

const Navbar = () => (
  <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-3 sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <img src="/file.svg" alt="logo" className="w-8 h-8" />
    </div>
    <ul className="flex gap-8 items-center text-black font-medium">
      <li className="text-orange-500">Home</li>
      <li className="hover:text-orange-500 cursor-pointer">Help</li>
      <li className="hover:text-orange-500 cursor-pointer">Search</li>
      <li className="hover:text-orange-500 cursor-pointer flex items-center gap-1">
        Cart <span className="inline-block w-4 h-4 bg-black rounded ml-1"></span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
