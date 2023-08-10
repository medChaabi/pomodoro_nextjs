"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { ImUser } from "react-icons/im";
import { MdEmail, MdPassword } from "react-icons/md";
import { signUp } from "@/api";
import IUser from "@/interfaces/IUser ";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    email: "",
    username: "",
    password: "",
  });
  const onSignUp = async () => {
    signUp(user);
    router.push("/login");
  };
  return (
    <div className="bg-base-100 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <RxAvatar size={45} />
        </div>
        <div className="p-12 md:p-24">
          <div className="flex items-center text-black mb-6 md:mb-8">
            <ImUser
              size={35}
              className="absolute ml-3"
              viewBox="0 0 24 24"
              width="24"
              color="black"
            />
            <input
              type="text"
              id="username"
              className="bg-gray-300 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center text-black mb-6 md:mb-8">
            <MdEmail
              size={25}
              className="absolute ml-3"
              viewBox="0 0 24 24"
              width="24"
              color="black"
            />
            <input
              type="email"
              id="email"
              className="bg-gray-300 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center text-black mb-6 md:mb-8">
            <MdPassword
              size={25}
              className="absolute ml-3"
              viewBox="0 0 24 24"
              width="24"
              color="black"
            />
            <input
              type="password"
              id="password"
              className="bg-gray-300 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <button
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
            onClick={onSignUp}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
