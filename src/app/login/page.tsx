"use client";
import { RxAvatar } from "react-icons/rx";
import { MdEmail, MdPassword } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import IUser from "@/interfaces/IUser ";
import { login } from "@/api";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });
  const onLogIn = async () => {
    login(user);
    router.push("/");
  };
  return (
    <div className="bg-base-100 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <RxAvatar size={45} />
        </div>
        <div className="p-12 md:p-24">
          <div className="flex items-center text-black mb-6 md:mb-8">
            <MdEmail
              size={25}
              className="absolute ml-3"
              viewBox="0 0 24 24"
              width="24"
              color="black"
            />
            <input
              type="text"
              id="email"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex items-center text-black mb-6 md:mb-8">
            <MdPassword
              size={25}
              className="absolute ml-3 "
              viewBox="0 0 24 24"
              width="24"
              color="black"
            />
            <input
              type="password"
              id="password"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
            value={user.password}
            onClick={onLogIn}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
