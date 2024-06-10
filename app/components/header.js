"use client"
import Image from "next/image";import{useState}from "react";const Header=()=>{const[isSidebarOpen,setIsSidebarOpen]=useState(!1);const toggleSidebar=()=>{setIsSidebarOpen(!isSidebarOpen)};return(<div className="relative"><div className={`fixed inset-0 bg-black opacity-50 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}onClick={toggleSidebar}></div><div className={`fixed inset-y-0 left-0 z-50 bg-white overflow-auto w-full md:w-64 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}><div className="flex justify-between items-center  "><button onClick={toggleSidebar}className="text-gray-900 focus:outline-none left-0"><svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"><path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M6 18L18 6M6 6l12 12"/></svg></button></div><nav className="flex flex-col items-center px-4 py-8 gap-5  "><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Why Us</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">About Us</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Services</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Contact Us</a></nav><a href="tel:+13146966898" className="flex items-center justify-center bg-[#4762FF] rounded-full px-8 py-2 text-white mt-8"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/ffffff/incoming-call.png" alt="incoming-call" className="mr-2"/>+1 314 6966698</a></div><div className="container mx-auto px-5 sm:px-10 lg:px-20 xl:px-32 flex flex-wrap p-5 items-center justify-between"><div className="flex items-center flex-grow"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"><img src="/logo.png" alt="Logo" className="w-18 h-24 text-white"/></a><div className="ml-4 flex flex-wrap items-center text-base md:hidden"><button onClick={toggleSidebar}className="text-gray-900 focus:outline-none"><svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">{isSidebarOpen?(<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M6 18L18 6M6 6l12 12"/>):(<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M4 6h16M4 12h16m-7 6h7"/>)}</svg></button></div></div><div className="hidden md:flex md:items-center"><nav className="flex flex-row items-center text-base"><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Why Us</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">About Us</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Services</a><a className="mr-5 hover:text-[#4762FF] cursor-pointer hover:underline underline-offset-4">Contact Us</a></nav><a href="tel:+13146966698" className="flex items-center bg-[#4762FF] rounded-full px-8 py-2 text-white self-start md:self-center ml-4"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/ffffff/incoming-call.png" alt="incoming-call" className="mr-2"/>+1 314 6966698</a></div></div></div>)};export default Header
