// components/Navbar.js
"use client"
import React from "react";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className=" p-4" style={{ backgroundColor: "#282828" }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Website Name */}
        <div className="text-white text-xl flex items-center ">
          <img
            src="https://i.postimg.cc/HsMt563Q/logo2.png"
            alt=""
            width={50}
            height={50}
            className="mr-1"
          />
          <a href="/">
          KeazoN
          <span className="text-xs font-thin text-gray-500">BOOKS</span>{" "}
          </a>
        </div>

        {/* Search Bar */}
        <div className="w-1/2 mx-4 relative">
          <input
            type="text"
            placeholder="Search for the book you want and read it now!"
            className="w-full p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#373737" }}
          />
          <GoSearch size={20} className="absolute left-2 top-2" color="white" />
        </div>

        {/* wish list button */}
        <div onClick={()=> { router.push('/components/WishlistManagement') }}>
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13.3333V31.6667C5 35.335 7.99 36.6667 10 36.6667H35V33.3333H10.02C9.25 33.3133 8.33333 33.01 8.33333 31.6667C8.33333 30.3233 9.25 30.02 10.02 30H35V6.66668C35 4.82834 33.505 3.33334 31.6667 3.33334H10C7.99 3.33334 5 4.66501 5 8.33334V13.3333ZM10 6.66668H31.6667V26.6667H8.33333V8.33334C8.33333 6.99001 9.25 6.68668 10 6.66668Z" fill="#E7E2E2" fill-opacity="0.81"/>
          {/* <path d="M19.995 23.3333L25.5783 17.8517C25.9226 17.5206 26.1964 17.1234 26.3835 16.684C26.5706 16.2445 26.667 15.7718 26.667 15.2942C26.667 14.8165 26.5706 14.3438 26.3835 13.9044C26.1964 13.4649 25.9226 13.0677 25.5783 12.7367C24.8843 12.0517 23.9484 11.6676 22.9733 11.6676C21.9982 11.6676 21.0623 12.0517 20.3683 12.7367L19.995 13.1L19.6217 12.735C18.9279 12.0501 17.9923 11.6661 17.0175 11.6661C16.0427 11.6661 15.1071 12.0501 14.4133 12.735C14.0691 13.0661 13.7952 13.4632 13.6081 13.9027C13.4211 14.3422 13.3246 14.8149 13.3246 15.2925C13.3246 15.7701 13.4211 16.2428 13.6081 16.6823C13.7952 17.1217 14.0691 17.5189 14.4133 17.85L19.995 23.3333Z" fill="#E7E2E2" fill-opacity="0.81"/> */}
          <path d="M19.995 23.3333L25.5783 17.8517C25.9226 17.5206 26.1964 17.1234 26.3835 16.684C26.5706 16.2445 26.667 15.7718 26.667 15.2942C26.667 14.8165 26.5706 14.3438 26.3835 13.9044C26.1964 13.4649 25.9226 13.0677 25.5783 12.7367C24.8843 12.0517 23.9484 11.6676 22.9733 11.6676C21.9982 11.6676 21.0623 12.0517 20.3683 12.7367L19.995 13.1L19.6217 12.735C18.9279 12.0501 17.9923 11.6661 17.0175 11.6661C16.0427 11.6661 15.1071 12.0501 14.4133 12.735C14.0691 13.0661 13.7952 13.4632 13.6081 13.9027C13.4211 14.3422 13.3246 14.8149 13.3246 15.2925C13.3246 15.7701 13.4211 16.2428 13.6081 16.6823C13.7952 17.1217 14.0691 17.5189 14.4133 17.85L19.995 23.3333Z" fill="#FFFFFF" fill-opacity="0.81"/>
          </svg>
        </div>





        {/* User Profile */}
        <div className="text-white">
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">Username</div>
            {/* <img
              src="/profile.jpg"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;