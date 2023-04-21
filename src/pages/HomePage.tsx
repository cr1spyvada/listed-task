import React from "react";

interface HomeProps {
  login: () => void;
}

export const HomePage = ({ login }: HomeProps) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-[2] flex text-7xl font-bold text-center justify-center items-center">
        Board.
      </div>
      <div className="flex-[3] bg-slate-200 flex justify-center items-center text-black">
        <div className="w-[50%] flex flex-col gap-y-2">
          <div className="font-bold text-4xl">Sign In</div>
          <div className="text-base">Sign into your account</div>
          <div className="flex justify-between gap-2">
            <button
              onClick={login}
              className="flex-[1] flex items-center justify-evenly rounded-md text-stone-500 p-2 bg-white"
            >
              <img src="google-icon.svg" alt="icon" />
              Sign in with Google
            </button>
            <button
              onClick={login}
              className="flex-[1] flex items-center justify-evenly rounded-md text-stone-500 p-2 bg-white"
            >
              <img src="apple.svg" alt="icon" />
              Sign in with Apple
            </button>
          </div>
          <div className="bg-white flex flex-col p-4 gap-2 rounded-xl">
            Email address
            <input
              type="text"
              className="bg-stone-300 rounded-lg p-2"
              defaultValue="johndoe@gmail.com"
            />
            Password
            <input
              type="password"
              className="bg-stone-300 rounded-lg p-2"
              defaultValue="12345678"
            />
            <div className="text-blue-500">Forgot password?</div>
            <button
              onClick={login}
              className="rounded-lg bg-black text-white p-2"
            >
              Sign In
            </button>
          </div>
          <div className="w-full text-center flex justify-center">
            Don{"'"}t have an account?{" "}
            <div className="text-blue-300"> Register here</div>
          </div>
        </div>
      </div>
    </div>
  );
};
