"use client";
import { useState } from "react";
import "./Sidebar.scss";
import React from "react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarData = [
    {
      title: "Health and Fitness",
      links: [{ label: "BMI Calculator", href: "/health-and-fitness/bmi-calculator" }],
    },
    {
      title: "Finance",
      links: [
        { label: "EMI Calculator", href: "/finance/emi-calculator" },
        { label: "GST Calculator", href: "/finance/gst-calculator" },
        { label: "FD Calculator", href: "/finance/fd-calculator" },
      ],
    },
    {
      title: "Mathematics",
      links: [
        { label: "Percentage Calculator", href: "/mathematics/percentage-calculator" },
        { label: "Age Calculator", href: "/mathematics/age-calculator" },
        { label: "Factorial Calculator", href: "/mathematics/factorial-calculator" },
      ],
    },
  ];
  return (
    <>
      {/* Top Nav Bar */}
      <div className="h-20  fixed top-0 left-0 w-full flex items-center px-5">
        <div className="flex justify-between items-center h-16 w-full bg-purple-700 text-white px-5 rounded-2xl drop-shadow-xl border border-gray-500  ">
          <h1 className="text-2xl font-bold tracking-widest uppercase">CalcPlus</h1>
          <button
            className="text-4xl font-bold tracking-widest uppercase d-none sm:hidden block "
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <HiOutlineXMark /> : <HiBars3 />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="p-5 h-[calc(100vh-5rem)] fixed top-20 left-0 w-full sm:w-auto">
        <aside
          className={` ${
            isSidebarOpen ? " inset-y-0 w-full opacity-100" : " w-0 opacity-0"
          } h-full sm:w-80 scroll-bar ease-liner duration-300 sm:opacity-100 p-5 pr-2 rounded-2xl drop-shadow-xl border border-gray-500 bg-gray-50`}
        >
          <div className="h-full overflow-y-auto scroll-bar">
            {sidebarData.map((section, index) => (
              <div className="space-y-2 p-5 " key={index}>
                <h2 className="text-sm text-gray-500 font-extrabold uppercase ">{section.title}</h2>
                <div className="flex flex-col ">
                  {section.links.map((link, index) => (
                    <a
                      rel="noopener noreferrer"
                      className="text-lg font-medium py-3"
                      href={link.href}
                      key={index}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
