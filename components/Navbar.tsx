import React from "react";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-700 gap-2">
      <img src="android-chrome-192x192.png" alt="" className="w-20"/>
      <h1 className="sm:text-3xl text-xl font-bold tracking-tight cursor-pointer">
        Commune-ai
        <span className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text rounded-md px-4 py-1">
          Chef
        </span>
      </h1>
    </header>
  );
}
