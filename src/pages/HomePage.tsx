import React from "react";

export const HomePage = () => {
  return (
    <div className="flex h-full">
      <div className="flex-[2] flex text-7xl font-bold text-center justify-center items-center">
        Board
      </div>
      <div className="flex-[3] bg-white flex justify-center items-center text-black">
        <div className="w-1/2">
          <div className="font-bold text-4xl">Sign In</div>
          <div className="text-base">Sign into your account</div>
          <button className="rounded-lg"></button>
        </div>
      </div>
    </div>
  );
};
