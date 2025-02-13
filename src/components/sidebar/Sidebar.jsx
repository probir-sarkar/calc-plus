"use client";
import { useState, useEffect } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { sidebarData } from "@/data/sidebar";
import Link from "next/link";
import ThemeSwitcher from "../common/ThemeSwitcher";
import { MdCalculate } from "react-icons/md";
import SideBarList from "./SidebarList";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="z-20">
      <div className="h-20  fixed top-0 left-0 w-full flex items-center px-5">
        <div className="flex justify-between items-center h-16 w-full bg-purple-700 text-white px-5 rounded-2xl drop-shadow-xl border border-gray-500  ">
          <div className="flex gap-1 items-center">
            <MdCalculate size={24} />
            <Link href="/" className="text-2xl font-bold tracking-widest uppercase">
              CalcPlus
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button className="text-4xl font-bold tracking-widest uppercase d-none sm:hidden block " onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Sidebar">
              {isSidebarOpen ? <HiOutlineXMark /> : <HiBars3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`py-5 sm:px-5 h-[calc(100dvh-5rem)] fixed top-20 sm:left-0 sm:w-auto ease-liner duration-500 overflow-hidden ${
          isSidebarOpen ? "w-full px-5 left-0" : "left-[-100%]"
        }`}
      >
        <SideBarList />
      </aside>
    </div>
  );
};

export default Sidebar;
